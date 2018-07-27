using TodoApp.WebAPI.Core.Repositories;

namespace TodoApp.WebAPI.Core
{
    public interface IUnitOfWork
    {
        IAssignmentsRepository Assignments { get; }
        void Complete();
    }
}