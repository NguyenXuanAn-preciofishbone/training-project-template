using Microsoft.EntityFrameworkCore;

namespace ASPNetCoreAssignment.Models
{
    public class TrainingAssignmentDbContext: DbContext
    {
        public TrainingAssignmentDbContext(DbContextOptions options): base(options)
        {

        }

        public DbSet<DataFile> DataFile { get; set; }

        public DbSet<ExceptionLog> ExceptionLogs { get; set; }
    }
}
