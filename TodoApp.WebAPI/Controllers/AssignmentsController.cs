﻿using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Web.Http;
using TodoApp.WebAPI.Core;
using TodoApp.WebAPI.Core.Dtos;
using TodoApp.WebAPI.Core.Models;

namespace TodoApp.WebAPI.Controllers
{
    [Authorize]
    public class AssignmentsController : ApiController
    {
        private readonly IUnitOfWork _unitOfWork;

        public AssignmentsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public IEnumerable<Assignment> Get()
        {
            // TODO: Implement Get assignments

            var assignments = _unitOfWork.Assignments.GetAssignments();

            return assignments;
        }

        [HttpPost]
        public IHttpActionResult Post([FromBody]AssignmentDto dto)
        {
            var userId = User.Identity.GetUserId();

            if (userId == null)
                return Unauthorized();

            if (dto == null)
                return BadRequest("Argument cannot be null");

            var assignment = new Assignment
            {
                UserId = userId,
                Content = dto.Content,
                CreatedOn = DateTime.Now.ToString("f"),
                IsCompleted = false
            };

            _unitOfWork.Assignments.Add(assignment);
            _unitOfWork.Complete();

            return Ok();
        }
    }
}