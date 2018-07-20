using TodoApp.WebAPI.Core;
using TodoApp.WebAPI.Core.Repositories;
using TodoApp.WebAPI.Persistence.Repositories;

namespace TodoApp.WebAPI.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _context;

        public IAssignmentsRepository Assignments { get; set; }

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
            Assignments = new AssignmentsRepository(context);
        }

        public void Complete()
        {
            _context.SaveChanges();
        }
    }
}