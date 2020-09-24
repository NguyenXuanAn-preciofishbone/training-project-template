using ASPNetCoreAssignment.Models;
using ASPNetCoreAssignment.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNetCoreAssignment.Middleware
{
    public class ExceptionLoggingMiddleware
    {
        private readonly RequestDelegate _next;

        public ExceptionLoggingMiddleware(RequestDelegate next)
        {
            _next = next;
        }
        [Authorize]
        public async Task Invoke(HttpContext context, IExceptionLogService exceptionLogService)
        {
            try
            {
                await _next(context);
            }
            catch (Exception e)
            {
                //dbcontext.ExceptionLogs.Add(new ExceptionLog()
                //{
                //    message = e.Message,
                //    user = context.User.Identity.Name
                //});
                //dbcontext.SaveChanges();
                exceptionLogService.CreateExeptionLog(new ExceptionLog()
                {
                    Message = e.Message,
                    User = context.User.Identity.Name
                });
                throw;
                //throw e;
            }
        }
    }

}
