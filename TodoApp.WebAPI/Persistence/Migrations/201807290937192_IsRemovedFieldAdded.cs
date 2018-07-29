namespace TodoApp.WebAPI.Persistence.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class IsRemovedFieldAdded : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Assignments", "IsRemoved", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Assignments", "IsRemoved");
        }
    }
}
