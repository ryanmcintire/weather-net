
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using WeatherNet.WeatherService.Models;
using WeatherNet.WeatherService.Extensions;
using WeatherNet.WeatherService.Abstractions.Services;

namespace WeatherNet.WeatherService.Services
{

    // sample call for reference  - https://api.darksky.net/forecast/9b3ad653fd2a458c74b5c1e52073c1c5/37.8267,-122.4233
    // 
    // secret key for cheat reference - 9b3ad653fd2a458c74b5c1e52073c1c5
    // TODO - remove

    public class WeatherApiService : IWeatherService
    {
        // todo - remvove
        private readonly string key = "/c0dfbe1aefea1cf7a3f7c1acd1811a4d";

        private readonly string baseUrl = "https://api.darksky.net";
        private readonly string forecastPath = "/forecast";


        public async Task<List<WeatherResponse>> GetPastWeekWeatherAsync(GeoPair geoPair) {
            DateTime today = DateTime.Today;
            var responseList = new List<WeatherResponse>();
            for (int index = 0; index > -7; index--) {
                var response = await this.GetWeatherForDay(today.AddDays(index), geoPair);
                // todo - implement retry logic mechanism. 
                if (response == null) return null;
                responseList.Add(response);
            }
            return responseList;
        }

        public async Task<WeatherResponse> GetWeatherForDay(DateTime day, GeoPair geoPair) {
            var url = this.BuildUrl(day, geoPair);
            var client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync(url);
            if (response.IsSuccessStatusCode) {
                var jsonString = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<WeatherResponse>(jsonString);
            }
            return null;
        }

        private string BuildUrl(DateTime day, GeoPair geoPair) {
            return $"{this.baseUrl}{this.forecastPath}{this.key}/{geoPair.Latitude},{geoPair.Longitude},{day.ToUnixTimeSeconds()}";
        }
    }


}