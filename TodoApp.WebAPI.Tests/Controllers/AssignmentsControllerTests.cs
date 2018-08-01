using AutoMapper;
using FluentAssertions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Net;
using System.Web.Http;
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

            var config = new MapperConfiguration(cfg => cfg.CreateMap<AssignmentGetDto, Assignment>());
            var mapper = config.CreateMapper();

            _assignmentsController = new AssignmentsController(mockUoW.Object, mapper);
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
        public void Get_ValidRequest_ShouldReturnListOfAssignments()
        {
            var assignment = new Assignment { UserId = _userId};
            var assignments = new List<Assignment>{ assignment };

            _mockRepository.Setup(r => r.GetUsersAssignments(_userId)).Returns(assignments);

            var result = _assignmentsController.Get();

            result.Should().BeOfType<List<AssignmentGetDto>>();
        }

        [TestMethod]
        public void GetOne_UserSendsRequestWithInvalidId_ShouldReturnHttpNotFoundCode()
        {
            var assignment = new Assignment();
            _mockRepository.Setup(r => r.GetAssignment(1)).Returns(assignment);

            Action result = () => _assignmentsController.Get(2);

            result.Should().Throw<HttpResponseException>()
                .Which.Response.StatusCode.Should().Be(HttpStatusCode.NotFound);
        }

        [TestMethod]
        public void GetOne_ValidRequest_ShouldReturnAssignment()
        {
            var assignment = new Assignment();
            _mockRepository.Setup(r => r.GetAssignment(1)).Returns(assignment);

            var result = _assignmentsController.Get(1);

            result.Should().BeOfType<AssignmentGetDto>();
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

            result.Should().BeOfType<OkNegotiatedContentResult<Assignment>>();
        }

        [TestMethod]
        public void Update_AssignmentDoesNotExists_ShouldReturnNotFound()
        {
            var dto = new AssignmentUpdateDto {Content = "-"};

            var result = _assignmentsController.Update(1, dto);

            result.Should().BeOfType<NotFoundResult>();
        }

        [TestMethod]
        public void Update_UpdateContentIsNull_ShouldReturnOk()
        {
            var assignment = new Assignment { Id = 1, Content = "-", UserId = _userId };

            _mockRepository.Setup(r => r.GetAssignment(1)).Returns(assignment);

            var result = _assignmentsController
                .Update(1, new AssignmentUpdateDto { IsCompleted = true });

            result.Should().BeOfType<OkNegotiatedContentResult<Assignment>>();
        }

        [TestMethod]
        public void Update_UserUpdatesAnothersUserAssignment_ShouldReturnUnauthorized()
        {
            var assignment = new Assignment {Id = 1, Content = "-", UserId = _userId + "-"};

            _mockRepository.Setup(r => r.GetAssignment(1)).Returns(assignment);

            var result = _assignmentsController
                .Update(1, new AssignmentUpdateDto {Content = "--"});

            result.Should().BeOfType<UnauthorizedResult>();
        }

        [TestMethod]
        public void Update_ValidRequest_ShouldReturnOk()
        {
            var assignment = new Assignment { Id = 1, Content = "-", UserId = _userId };

            _mockRepository.Setup(r => r.GetAssignment(1)).Returns(assignment);

            var result = _assignmentsController
                .Update(1, new AssignmentUpdateDto { Content = "--" });

            result.Should().BeOfType<OkNegotiatedContentResult<Assignment>>();
        }

        [TestMethod]
        public void Remove_NoAssignmentWithGivenIdExists_ShouldReturnNotFound()
        {
            var assignment = new Assignment();

            _mockRepository.Setup(r => r.GetAssignment(1)).Returns(assignment);

            var result = _assignmentsController.Remove(2);

            result.Should().BeOfType<NotFoundResult>();
        }

        [TestMethod]
        public void Remove_AssignmentIsAlreadyRemoved_ShouldReturnBadRequest()
        {
            var assignment = new Assignment();
            assignment.Remove();

            _mockRepository.Setup(r => r.GetAssignment(1)).Returns(assignment);

            var result = _assignmentsController.Remove(1);

            result.Should().BeOfType<BadRequestErrorMessageResult>();
        }

        [TestMethod]
        public void Remove_UserRemovesAnotherUsersAssignment_ShouldReturnUnauthorized()
        {
            var assignment = new Assignment { UserId = _userId + "-" };

            _mockRepository.Setup(r => r.GetAssignment(1)).Returns(assignment);

            var result = _assignmentsController.Remove(1);

            result.Should().BeOfType<UnauthorizedResult>();
        }

        [TestMethod]
        public void Remove_ValidRequest_ShouldReturnOk()
        {
            var assignment = new Assignment { UserId = _userId };

            _mockRepository.Setup(r => r.GetAssignment(1)).Returns(assignment);

            var result = _assignmentsController.Remove(1);

            result.Should().BeOfType<OkResult>();
        }
    }
}
