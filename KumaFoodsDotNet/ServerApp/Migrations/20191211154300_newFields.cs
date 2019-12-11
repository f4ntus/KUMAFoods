using Microsoft.EntityFrameworkCore.Migrations;

namespace ServerApp.Migrations
{
    public partial class newFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<float>(
                name: "Fruktosegehalt",
                table: "Foods",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "Glukosegehalt",
                table: "Foods",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "Saccharosegehalt",
                table: "Foods",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "Sorbitgehalt",
                table: "Foods",
                nullable: false,
                defaultValue: 0f);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Fruktosegehalt",
                table: "Foods");

            migrationBuilder.DropColumn(
                name: "Glukosegehalt",
                table: "Foods");

            migrationBuilder.DropColumn(
                name: "Saccharosegehalt",
                table: "Foods");

            migrationBuilder.DropColumn(
                name: "Sorbitgehalt",
                table: "Foods");
        }
    }
}
