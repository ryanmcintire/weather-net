using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WeatherNet.WeatherService.Models;

namespace WeatherNet.WeatherService.Abstractions.Services
{
    public interface IWeatherService
    {
        Task<List<WeatherResponse>> GetPastWeekWeatherAsync(GeoPair geoPair);
        Task<WeatherResponse> GetWeatherForDay(DateTime day, GeoPair geoPair);
    }
}