using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace WeatherNet.GeoDataService
{
    public class Startup
    {
        const string CORS_POLICY = "CorsPolicy";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // definitely wouldn't have it configured so in a real-world app.
            services.AddCors(options => {
                options.AddPolicy(CORS_POLICY, 
                builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()   
                    .AllowAnyHeader()
                    .AllowCredentials());
            });

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(CORS_POLICY);

            app.UseMvc();
        }
    }
}
