using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
        public async Task<IActionResult> GetAsync() {
            var result = await weatherService.GetPastWeekWeatherAsync();
            return Ok(result);
        }

        // GET: api/Weather/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/Weather
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }
        
        // PUT: api/Weather/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
