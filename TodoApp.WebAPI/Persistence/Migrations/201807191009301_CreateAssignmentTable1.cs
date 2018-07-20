using System.Data.Entity.Migrations;

namespace TodoApp.WebAPI.Persistence.Migrations
{
    public partial class CreateAssignmentTable1 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Assignments", "UserId", c => c.String(nullable: false, maxLength: 255));
            AlterColumn("dbo.Assignments", "CreatedOn", c => c.String(nullable: false, maxLength: 50));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Assignments", "CreatedOn", c => c.String(nullable: false));
            AlterColumn("dbo.Assignments", "UserId", c => c.String(nullable: false));
        }
    }
}
