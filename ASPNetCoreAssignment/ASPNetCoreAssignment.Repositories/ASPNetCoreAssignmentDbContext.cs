using ASPNetCoreAssignment.Repositories.Entities;
using Microsoft.EntityFrameworkCore;

namespace ASPNetCoreAssignment.Repositories
{
    internal class ASPNetCoreAssignmentDbContext: DbContext
    {
        public ASPNetCoreAssignmentDbContext(DbContextOptions options): base(options)
        {

        }

        public DbSet<DataFileEntity> DataFiles { get; set; }

        public DbSet<ExceptionLogEntity> ExceptionLogs { get; set; }
    }
}
