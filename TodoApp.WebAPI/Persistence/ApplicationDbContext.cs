using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;
using TodoApp.WebAPI.Core.Models;

namespace TodoApp.WebAPI.Persistence
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
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
    }
}