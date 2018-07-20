using System.Collections.Generic;
using System.Linq;
using TodoApp.WebAPI.Core.Models;
using TodoApp.WebAPI.Core.Repositories;

namespace TodoApp.WebAPI.Persistence.Repositories
{
    public class AssignmentsRepository : IAssignmentsRepository
    {
        private readonly IApplicationDbContext _context;

        public AssignmentsRepository(IApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Assignment> GetAssignments()
        {
            return _context.Assignments.ToList();
        }

        public void Add(Assignment assignment)
        {
            _context.Assignments.Add(assignment);
        }
    }
}