using Microsoft.EntityFrameworkCore.Migrations;

namespace ASPNetCoreAssignment.Migrations
{
    public partial class TrainingAssignmentEditExceptionLogsTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "user",
                table: "ExceptionLogs",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "user",
                table: "ExceptionLogs");
        }
    }
}
