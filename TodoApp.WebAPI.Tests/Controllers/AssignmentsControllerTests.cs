using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using TodoApp.WebAPI.Controllers;
using TodoApp.WebAPI.Core;
using TodoApp.WebAPI.Core.Repositories;
using TodoApp.WebAPI.Tests.Extensions;

namespace TodoApp.WebAPI.Tests.Controllers
{
    [TestClass]
    public class AssignmentsControllerTests
    {
        private AssignmentsController _assignmentsController;
        private Mock<IAssignmentsRepository> _mockRepository;
        private string _userId;

        [TestInitialize]
        public void TestInitialize()
        {
            _mockRepository = new Mock<IAssignmentsRepository>();

            var mockUoW = new Mock<IUnitOfWork>();
            mockUoW.SetupGet(u => u.Assignments).Returns(_mockRepository.Object);

            _assignmentsController = new AssignmentsController(mockUoW.Object);
            _userId = "1";
            _assignmentsController.MockCurrentUser(_userId, "user1@domain.com");
        }

        [TestMethod]
        public void TestMethod1()
        {
        }
    }
}
