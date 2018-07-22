using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Data.Entity;
using TodoApp.WebAPI.Core.Models;
using TodoApp.WebAPI.Persistence;
using TodoApp.WebAPI.Persistence.Repositories;

namespace TodoApp.WebAPI.Tests.Persistence.Repositories
{
    [TestClass]
    public class AssignmentsRepositoryTests
    {
        private AssignmentsRepository _repository;
        private Mock<DbSet<Assignment>> _mockAssignments;

        [TestInitialize]
        public void TestInitialize()
        {
            _mockAssignments = new Mock<DbSet<Assignment>>();

            var mockContext = new Mock<IApplicationDbContext>();
            mockContext.SetupGet(c => c.Assignments).Returns(_mockAssignments.Object);

            _repository = new AssignmentsRepository(mockContext.Object);
        }

        
    }
}
