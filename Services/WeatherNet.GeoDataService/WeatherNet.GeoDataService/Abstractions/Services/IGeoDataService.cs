using System.Collections.Generic;
using System.Threading.Tasks;
using WeatherNet.GeoDataService.Models;

namespace WeatherNet.GeoDataService.Abstractions.Services
{
    public interface IGeoDataService
    {
         Task<GeoDataResponse> GetGeoData(string query);
    }
}