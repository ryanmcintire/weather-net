
using System.Collections.Generic;
using Newtonsoft.Json;

namespace WeatherNet.GeoDataService.Models
{
    public class GeoDataResponse {
        public List<GeoDataResults> Results { get; set; }
    }

    public class GeoDataResults {
        [JsonProperty("formatted_address")]
        public string FormattedAddress { get; set; }
        public LocationGeometry Geometry { get; set; }
    }

    public class LocationGeometry {
        public Location Location { get; set; }
    }

    public class Location {
        [JsonProperty("lat")]
        public string Latitude { get; set; }
        [JsonProperty("lng")]
        public string Lng { get; set; }
    }

}