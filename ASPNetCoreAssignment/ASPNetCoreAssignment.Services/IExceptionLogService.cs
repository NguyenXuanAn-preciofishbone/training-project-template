using ASPNetCoreAssignment.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ASPNetCoreAssignment.Services
{
    public interface IExceptionLogService
    {
        void CreateExeptionLog(ExceptionLog exceptionLog );
    }
}
