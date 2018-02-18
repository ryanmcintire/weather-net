using System;

namespace WeatherNet.WeatherService.Extensions
{
    public static class DateTimeExtensions
    {
        public static string ToUnixTimeSeconds(this DateTime dt) {
            DateTimeOffset offset = new DateTimeOffset(dt);
            return offset.ToUnixTimeSeconds().ToString();
        }
    }
}