using ASPNetCoreAssignment.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ASPNetCoreAssignment.Repositories
{
    public interface IExceptionLogRepository
    {
        void CreateExceptionLog(ExceptionLog exceptionLog);
    }
}
