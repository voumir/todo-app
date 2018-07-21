using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;
using TodoApp.WebAPI.Core.Models;
using TodoApp.WebAPI.Persistence.EntityConfigurations;

namespace TodoApp.WebAPI.Persistence
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>, IApplicationDbContext
    {
        public DbSet<Assignment> Assignments { get; set; }

        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }
        
        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new AssignmentConfiguration());

            base.OnModelCreating(modelBuilder);
        }
    }
}