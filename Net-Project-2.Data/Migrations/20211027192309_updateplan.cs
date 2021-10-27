using Microsoft.EntityFrameworkCore.Migrations;

namespace Net_Project_2.Data.Migrations
{
    public partial class updateplan : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PlanUser");

            migrationBuilder.DropTable(
                name: "PlanUsers");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Plans",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PlanId",
                table: "Devices",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Plans_UserId",
                table: "Plans",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Devices_PlanId",
                table: "Devices",
                column: "PlanId");

            migrationBuilder.AddForeignKey(
                name: "FK_Devices_Plans_PlanId",
                table: "Devices",
                column: "PlanId",
                principalTable: "Plans",
                principalColumn: "PlanId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Plans_Users_UserId",
                table: "Plans",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Devices_Plans_PlanId",
                table: "Devices");

            migrationBuilder.DropForeignKey(
                name: "FK_Plans_Users_UserId",
                table: "Plans");

            migrationBuilder.DropIndex(
                name: "IX_Plans_UserId",
                table: "Plans");

            migrationBuilder.DropIndex(
                name: "IX_Devices_PlanId",
                table: "Devices");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Plans");

            migrationBuilder.DropColumn(
                name: "PlanId",
                table: "Devices");

            migrationBuilder.CreateTable(
                name: "PlanUser",
                columns: table => new
                {
                    PlansPlanId = table.Column<int>(type: "int", nullable: false),
                    UsersUserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PlanUser", x => new { x.PlansPlanId, x.UsersUserId });
                    table.ForeignKey(
                        name: "FK_PlanUser_Plans_PlansPlanId",
                        column: x => x.PlansPlanId,
                        principalTable: "Plans",
                        principalColumn: "PlanId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PlanUser_Users_UsersUserId",
                        column: x => x.UsersUserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PlanUsers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PlanId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PlanUsers", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PlanUser_UsersUserId",
                table: "PlanUser",
                column: "UsersUserId");
        }
    }
}
