using FluentAssertions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Collections.Generic;
using System.Data.Entity;
using TodoApp.WebAPI.Core.Models;
using TodoApp.WebAPI.Persistence;
using TodoApp.WebAPI.Persistence.Repositories;
using TodoApp.WebAPI.Tests.Extensions;

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
            mockContext.Setup(c => c.Assignments).Returns(() => _mockAssignments.Object);

            _repository = new AssignmentsRepository(mockContext.Object);
        }

        [TestMethod]
        public void GetUsersAssignments_NoAssignmentsForGivenUser_ShouldBeEmpty()
        {
            var assignment = new Assignment { Content = "-", UserId = "1" };

            _mockAssignments.SetSource(new List<Assignment>{ assignment });

            var assignments = _repository.GetUsersAssignments("2");

            assignments.Should().BeEmpty();
        }

        [TestMethod]
        public void GetUsersAssignments_AssignmentForGivenUserIsRemoved_ShouldBeEmpty()
        {
            var assignment = new Assignment { Content = "-", UserId = "1" };
            assignment.Remove();

            _mockAssignments.SetSource(new List<Assignment> { assignment });

            var assignments = _repository.GetUsersAssignments("1");

            assignments.Should().BeEmpty();
        }

        [TestMethod]
        public void GetUsersAssignments_ValidRequest_ShouldContainAssignment()
        {
            var assignment = new Assignment { Content = "-", UserId = "1" };

            _mockAssignments.SetSource(new List<Assignment> { assignment });

            var assignments = _repository.GetUsersAssignments("1");

            assignments.Should().Contain(assignment);
        }
    }
}
