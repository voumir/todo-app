using System.Collections.Generic;
using TodoApp.WebAPI.Core.Models;

namespace TodoApp.WebAPI.Core.Repositories
{
    public interface IAssignmentsRepository
    {
        IEnumerable<Assignment> GetAssignments();
        void Add(Assignment assignment);
    }
}