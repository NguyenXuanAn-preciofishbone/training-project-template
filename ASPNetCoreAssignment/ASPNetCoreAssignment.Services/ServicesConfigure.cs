using ASPNetCoreAssignment.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class ServicesConfigure
    {
        public static IServiceCollection AddAspNetCoreAssignment(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped(typeof(IDataFileService), typeof(DataFileService));
            services.AddScoped(typeof(IExceptionLogService), typeof(ExceptionLogService));

            services.AddAspNetCoreAssignmentRepositoies(configuration);

            return services;
        }
    }
}
