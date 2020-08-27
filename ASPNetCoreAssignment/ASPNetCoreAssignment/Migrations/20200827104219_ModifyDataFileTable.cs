using Microsoft.EntityFrameworkCore.Migrations;

namespace ASPNetCoreAssignment.Migrations
{
    public partial class ModifyDataFileTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "dateModified",
                table: "DataFile",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "type",
                table: "DataFile",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "dateModified",
                table: "DataFile");

            migrationBuilder.DropColumn(
                name: "type",
                table: "DataFile");
        }
    }
}
