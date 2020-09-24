using ASPNetCoreAssignment.Models;
using ASPNetCoreAssignment.Repositories.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ASPNetCoreAssignment.Repositories
{
    internal class ExceptionLogRepository : IExceptionLogRepository
    {
        private readonly ASPNetCoreAssignmentDbContext _context;
        public ExceptionLogRepository(ASPNetCoreAssignmentDbContext context)
        {
            this._context = context;
        }
        public void CreateExceptionLog(ExceptionLog exceptionLog)
        {
            _context.ExceptionLogs.Add(new ExceptionLogEntity()
            {
                User = exceptionLog.User,
                Message = exceptionLog.Message
            });
        }
    }
}
