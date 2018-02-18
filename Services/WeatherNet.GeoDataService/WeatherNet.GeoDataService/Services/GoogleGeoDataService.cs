using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using Newtonsoft.Json;
using WeatherNet.GeoDataService.Abstractions.Services;
using WeatherNet.GeoDataService.Models;

namespace WeatherNet.GeoDataService.Services
{
    public class GoogleGeoDataService : IGeoDataService
    {
        private readonly string geoKey = "AIzaSyB07s3Cqs3cY84lN6Tj1JCaMOUVPk-7PHI";

        private readonly string baseUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=";

        // sample call for reference - https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyB07s3Cqs3cY84lN6Tj1JCaMOUVPk-7PHI

        public async Task<GeoDataResponse> GetGeoData(string query) {
            var responseList = new List<GeoDataResponse>();
            
            var client = new HttpClient();
            var url = this.BuildUrl(query);
            HttpResponseMessage response = await client.GetAsync(url);
            if (response.IsSuccessStatusCode) {
                var jsonString = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<GeoDataResponse>(jsonString);
            }
            return null;


        }

        private string BuildUrl(string query) {
            var encodedString = HttpUtility.UrlEncode(query);
            return $"{baseUrl}{encodedString}&key={geoKey}";
        }
        
    }
}