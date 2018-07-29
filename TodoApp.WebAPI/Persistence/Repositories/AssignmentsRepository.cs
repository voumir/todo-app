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

        public IEnumerable<Assignment> GetUsersAssignments(string userId)
        {
            return _context.Assignments
                .Where(a => a.UserId == userId && !a.IsRemoved)
                .ToList();
        }

        public Assignment GetAssignment(int id)
        {
            return _context.Assignments
                .SingleOrDefault(a => a.Id == id);
        }

        public void Add(Assignment assignment)
        {
            _context.Assignments.Add(assignment);
        }
    }
}