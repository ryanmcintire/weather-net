using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WeatherNet.GeoDataService.Abstractions.Services;
using WeatherNet.GeoDataService.Models;

namespace WeatherNet.GeoDataService.Controllers
{
    [Produces("application/json")]
    [Route("api/v1/[controller]")]
    public class GeoDataController : Controller
    {
        private readonly IGeoDataService geoDataService;

        public GeoDataController(IGeoDataService geoDataService) {
            this.geoDataService = geoDataService;
        }

        [HttpGet]
        public async Task<IActionResult> GetTaskAsync([FromQuery]string query) {
            GeoDataResponse responseList = await this.geoDataService.GetGeoData(query);
            if (responseList == null) return this.BadRequest(new {
                Error = "Bad search."
            });
            return this.Ok(responseList);
        }
    }
}