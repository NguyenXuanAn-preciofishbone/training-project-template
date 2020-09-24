using ASPNetCoreAssignment.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class RepositoriesConfigure
    {
        public static IServiceCollection AddAspNetCoreAssignmentRepositoies(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped(typeof(IDataFileRepository), typeof(DataFileRepository));
            services.AddScoped(typeof(IExceptionLogRepository), typeof(ExceptionLogRepository));

            services.AddDbContext<ASPNetCoreAssignmentDbContext>(opts => opts.UseSqlServer(configuration.GetConnectionString("sqlConnection")));
            return services;
        }
    }
}
