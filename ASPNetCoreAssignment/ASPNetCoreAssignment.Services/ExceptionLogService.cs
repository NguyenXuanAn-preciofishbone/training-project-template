using ASPNetCoreAssignment.Models;
using ASPNetCoreAssignment.Repositories;

namespace ASPNetCoreAssignment.Services
{
    internal class ExceptionLogService : IExceptionLogService
    {
        private readonly IExceptionLogRepository _exceptionLogRepository;
        public ExceptionLogService(IExceptionLogRepository exceptionLogRepository)
        {
            this._exceptionLogRepository = exceptionLogRepository;
        }
        public void CreateExeptionLog(ExceptionLog exceptionLog)
        {
            _exceptionLogRepository.CreateExceptionLog(exceptionLog);
        }
    }
}
