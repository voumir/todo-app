using System.Collections.Generic;
using TodoApp.WebAPI.Core.Models;

namespace TodoApp.WebAPI.Core.Repositories
{
    public interface IAssignmentsRepository
    {
        IEnumerable<Assignment> GetUsersAssignments(string userId);
        Assignment GetAssignment(int id);
        void Add(Assignment assignment);
    }
}