using FluentAssertions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Web.Http.Results;
using TodoApp.WebAPI.Controllers;
using TodoApp.WebAPI.Core;
using TodoApp.WebAPI.Core.Dtos;
using TodoApp.WebAPI.Core.Models;
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
        public void Get_UserHaveNoAssignments_ShouldReturnEmptyIEnumerable()
        {
            var result = _assignmentsController.Get();

            result.Should().BeEmpty();
        }

        [TestMethod]
        public void Post_NoArgumentsProvided_ShouldReturnBadRequest()
        {
            var result = _assignmentsController.Post(null);

            result.Should().BeOfType<BadRequestErrorMessageResult>();
        }

        [TestMethod]
        public void Post_NoContentProvided_ShouldReturnBadRequest()
        {
            var assignment = new AssignmentDto();

            var result = _assignmentsController.Post(assignment);

            result.Should().BeOfType<BadRequestErrorMessageResult>();
        }

        [TestMethod]
        public void Post_ValidRequest_ShouldReturnOk()
        {
            var assignment = new AssignmentDto {Content = "-"};

            var result = _assignmentsController.Post(assignment);

            result.Should().BeOfType<OkResult>();
        }

        [TestMethod]
        public void Update_AssignmentDoesNotExists_ShouldReturnNotFound()
        {
            var dto = new AssignmentUpdateDto {Content = "-", Id = 1};

            var result = _assignmentsController.Update(dto);

            result.Should().BeOfType<NotFoundResult>();
        }

        [TestMethod]
        public void Update_UserUpdatesAnothersUserAssignment_ShouldReturnUnauthorized()
        {
            var assignment = new Assignment {Id = 1, Content = "-", UserId = _userId + "-"};

            _mockRepository.Setup(r => r.GetAssignment(1)).Returns(assignment);

            var result = _assignmentsController
                .Update(new AssignmentUpdateDto {Id = 1, Content = "-"});

            result.Should().BeOfType<UnauthorizedResult>();
        }

        [TestMethod]
        public void Update_ValidRequest_ShouldReturnOk()
        {
            var assignment = new Assignment { Id = 1, Content = "-", UserId = _userId };

            _mockRepository.Setup(r => r.GetAssignment(1)).Returns(assignment);

            var result = _assignmentsController
                .Update(new AssignmentUpdateDto { Id = 1, Content = "--" });

            result.Should().BeOfType<OkResult>();
        }
    }
}
