using System;

namespace WeatherNet.WeatherService.Models
{
    public class GeoPair
    {

        public double Latitude { get; }
        public double Longitude { get; }

        public GeoPair(double latitude, double longitude)
        {
            this.Latitude = latitude;
            this.Longitude = longitude;
        }
    }

    public static class GeoPairFactory {

        public static GeoPair GetGeoPair(string latitude, string longitude) {
            try {
                if (latitude == null || longitude == null) throw new FormatException();
                var latDouble = Convert.ToDouble(latitude);
                var longDouble = Convert.ToDouble(longitude);
                return new GeoPair(latDouble, longDouble);
            } catch (Exception ex) {
                if (ex is FormatException || ex is OverflowException) {
                    return null;
                }
                throw ex; 
            }
            
        }

    }
}