using System.Data.Entity;
using TodoApp.WebAPI.Core.Models;

namespace TodoApp.WebAPI.Persistence
{
    public interface IApplicationDbContext
    {
        DbSet<Assignment> Assignments { get; set; }
    }
}