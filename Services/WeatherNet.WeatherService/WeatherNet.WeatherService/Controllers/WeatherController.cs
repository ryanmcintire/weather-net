using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WeatherNet.WeatherService.Models;
using WeatherNet.WeatherService.Services;

namespace WeatherNet.WeatherService.Controllers
{
    [Produces("application/json")]
    [Route("api/v1/[controller]")]
    public class WeatherController : Controller
    {
        private readonly WeatherApiService weatherService;

        public WeatherController()
        {
            this.weatherService = new WeatherApiService();
        }

        // GET: api/Weather
        [HttpGet]
        public async Task<IActionResult> GetAsync([FromQuery]string latitude, [FromQuery]string longitude) {
            var geoPair = GeoPairFactory.GetGeoPair(latitude, longitude);
            if (geoPair == null) return this.BadRequest();
            var result = await weatherService.GetPastWeekWeatherAsync(geoPair);
            if (result == null) return this.BadRequest();
            return this.Ok(result);
        }
    }
}
