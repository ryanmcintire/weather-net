using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using WeatherNet.WeatherService.Abstractions.Services;
using WeatherNet.WeatherService.Controllers;
using WeatherNet.WeatherService.Models;

namespace Tests
{

    public class WeatherControllerUnitTests
    {
        private Mock<IWeatherService> mockWeatherService;
        private WeatherController weatherController;

        [SetUp]
        public void Setup()
        {
            this.mockWeatherService = GetMockWeatherService();
            this.weatherController = new WeatherController(this.mockWeatherService.Object);
        }

        [Test]
        public void GoodParameters_ShouldReturnOkResult() {
            //var weatherController = new WeatherController(this.mockWeatherService.Object);
            var result = weatherController.GetAsync("12.34", "-72.89").Result;
            var okResult = result as OkObjectResult;

            Assert.IsNotNull(okResult);
            Assert.AreEqual(200, okResult.StatusCode);
        }

        [Test]
        public void NoParameters_ShouldReturnBadRequest() {
            //var weatherController = new WeatherController(this.mockWeatherService.Object);
            
            var result = weatherController.GetAsync("", "").Result;
            var badRequestResult = result as BadRequestObjectResult;

            Assert.IsNotNull(badRequestResult);
            Assert.AreEqual(400, badRequestResult.StatusCode);
        }

        [TestCase(null, null)]
        [TestCase("words", null)]
        [TestCase(null, "words")]
        [TestCase("words", "words")]
        [TestCase("12.34", "words")]
        [TestCase("words", "12.34")]
        [TestCase("12.34", null)]
        [TestCase(null, "12.34")]
        public void BadParameters_ShouldReturnBadRequest(string latitude, string longitude) {
            var result = weatherController.GetAsync(latitude, longitude).Result;
            var badRequestResult = result as BadRequestObjectResult;
            
            Assert.IsNotNull(badRequestResult);
            Assert.AreEqual(400, badRequestResult.StatusCode);
        }

        private Mock<IWeatherService> GetMockWeatherService() {
            var mockWeatherService = new Mock<IWeatherService>();
            var expectedResult = new List<WeatherResponse>();

            mockWeatherService
                .Setup(svc => svc.GetPastWeekWeatherAsync(It.IsAny<GeoPair>()))
                .ReturnsAsync(expectedResult);

            return mockWeatherService;
        }
    }
}