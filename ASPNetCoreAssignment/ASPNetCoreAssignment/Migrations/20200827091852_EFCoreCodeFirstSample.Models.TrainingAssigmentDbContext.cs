using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ASPNetCoreAssignment.Migrations
{
    public partial class EFCoreCodeFirstSampleModelsTrainingAssigmentDbContext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DataFile",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    content = table.Column<byte[]>(nullable: true),
                    name = table.Column<string>(nullable: true),
                    createdBy = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DataFile", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "ExceptionLogs",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    message = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExceptionLogs", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DataFile");

            migrationBuilder.DropTable(
                name: "ExceptionLogs");
        }
    }
}
