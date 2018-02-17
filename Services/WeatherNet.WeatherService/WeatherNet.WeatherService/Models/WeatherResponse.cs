using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WeatherNet.WeatherService.Models
{
    public class WeatherResponse
    {
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string Timezone { get; set; }
        public Daily Daily { get; set; }

        public WeatherResponse()
        {
            this.Daily = new Daily();
        }
    }

    public class Daily
    {
        public List<DailyData> Data { get; set; }
        public Daily () {
            this.Data = new List<DailyData>();
        }
    }

    public class DailyData
    {
        public long Time { get; set; }
        public string Summary { get; set; }
        public string Icon { get; set; }
        public string TemperatureHigh { get; set; }
        public long TemperatureHighTime { get; set; }
        public string TemperatureLow { get; set; }
        public long TemperatureLowTime { get; set; }
    }

    public class Hourly
    {
        public string Summary { get; set; }
        public string Icon { get; set; }
        public List<HourlyData> Data { get; set; }
        public Hourly()
        {
            this.Data = new List<HourlyData>();
        }
    }

    public class HourlyData
    {
        public long Time { get; set; }
        public string Summary { get; set; }
        public string Icon { get; set; }
        public string Temperature { get; set; }
    }

    
}
