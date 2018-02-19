# Weatherish

See [demo application here](https://rbm-ws-client.appspot.com).

The application provides the past seven days' weather, as supplied via the Darksky api. The browser client is a React/Redux app. When a search query is entered, it calls to an ASP.NET Core 2 api service that then calls a Google maps api for geolocation about location(s) returned by the query. The client then passes the geolocation information to another ASP.NET Core 2 api service, which uses the data to call the Darksky api and retrieve the daily weather for the past seven days. 

### Installation

The application is compatible with the following:
1. Node 8.8.1
2. npm 5.4.2
3. dotnet 2.1.4 (.net core build tools)

The asp.net core web services taret .net core and can run on any machine compatible with the .net core runtime (including macos and prominent linux distros).

[.Net Core](https://www.microsoft.com/net)

The client was created using `create-react-app`, and the scaffolding/pipeline has not been extracted.
To run client locally, navigate to `WeatherNet/weathernet-client` and execute:

```
npm install
npm start
```

To run the services locally, navigate to the service folder and execute `dotnet run`. This will download and install the dependencies, build the application, and host the application within a lightweight development server.

To run all services locally, change the baseUrls in the actions files at `weathernet-client/src/client-app/actions`. These urls are currently hard-coded. 

