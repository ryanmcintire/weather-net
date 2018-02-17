
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using WeatherNet.WeatherService.Models;

namespace WeatherNet.WeatherService.Services
{

    // sample call for reference  - https://api.darksky.net/forecast/9b3ad653fd2a458c74b5c1e52073c1c5/37.8267,-122.4233
    // 
    // secret key for cheat reference - 9b3ad653fd2a458c74b5c1e52073c1c5
    // TODO - remove

    public class WeatherApiService
    {
        // todo - remvove
        private readonly string key = "/9b3ad653fd2a458c74b5c1e52073c1c5";
        private readonly string baseUrl = "https://api.darksky.net";
        private readonly string forecastPath = "/forecast";


        public async Task<List<WeatherResponse>> GetPastWeekWeatherAsync() {
            DateTime today = DateTime.Today;
            var responseList = new List<WeatherResponse>();
            for (int index = 0; index > -7; index--) {
                //todo - create response with http response status indication
                var response = await this.GetWeatherForDay(today.AddDays(index));
                if (response == null) return null;
                responseList.Add(response);
            }
            
            return responseList;
        }

        public async Task<WeatherResponse> GetWeatherForDay(DateTime day) {
            var url = this.BuildUrl("37", "-122.32");
            var client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync(url);
            if (response.IsSuccessStatusCode) {
                var jsonString = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<WeatherResponse>(jsonString);
            }
            return null;
        }

        private string BuildUrl(string latitude, string longitude) {
            DateTime today = DateTime.Today;
            DateTimeOffset offset = new DateTimeOffset(today);
            string sinceEpoch = offset.ToUnixTimeSeconds().ToString();
            return $"{this.baseUrl}{this.forecastPath}{this.key}/{latitude},{longitude},{sinceEpoch}";
        }
    }


}