﻿using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Net;
using System.Web.Http;
using System.Web.Http.Cors;
using TodoApp.WebAPI.Core;
using TodoApp.WebAPI.Core.Dtos;
using TodoApp.WebAPI.Core.Models;

namespace TodoApp.WebAPI.Controllers
{
    [Authorize]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AssignmentsController : ApiController
    {
        private readonly IUnitOfWork _unitOfWork;

        public AssignmentsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        /// <summary>
        /// Returns list of Assignments for logged user
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<Assignment> Get()
        {
            var userId = User.Identity.GetUserId();

            if (userId == null)
                throw new HttpResponseException(HttpStatusCode.Unauthorized);

            return _unitOfWork.Assignments.GetUsersAssignments(userId);
        }

        /// <summary>
        /// Returns Single Assignment with given id for current user
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/assignments/{id}")]
        public Assignment Get(int id)
        {
            var userId = User.Identity.GetUserId();

            if (userId == null)
                throw new HttpResponseException(HttpStatusCode.Unauthorized);

            var assignment = _unitOfWork.Assignments.GetAssignment(id);

            if (assignment == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);

            return assignment;
        }

        /// <summary>
        /// Creates Assignment object in database with given Http body data
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        [HttpPost]
        public IHttpActionResult Post([FromBody]AssignmentDto dto)
        {
            var userId = User.Identity.GetUserId();

            if (userId == null)
                return Unauthorized();

            if (dto == null)
                return BadRequest("Post action with no arguments");

            if (dto.Content == null)
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

            return Ok(assignment);
        }

        /// <summary>
        /// Updates Assignment with given id and Http body data
        /// </summary>
        /// <param name="id"></param>
        /// <param name="dto"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("api/assignments/{id}")]
        public IHttpActionResult Update(int id, [FromBody]AssignmentUpdateDto dto)
        {
            var assignment = _unitOfWork.Assignments.GetAssignment(id);

            if (assignment == null)
                return NotFound();

            if (assignment.UserId != User.Identity.GetUserId())
                return Unauthorized();

            assignment.Update(dto);

            _unitOfWork.Complete();

            return Ok(assignment);
        }

        /// <summary>
        /// Changes IsRemoved field in Database (does NOT remove item from database)
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("api/assignments/{id}")]
        public IHttpActionResult Remove(int id)
        {
            var assignment = _unitOfWork.Assignments.GetAssignment(id);

            if (assignment == null)
                return NotFound();

            if (assignment.IsRemoved)
                return BadRequest("Assignment is already removed");

            if (assignment.UserId != User.Identity.GetUserId())
                return Unauthorized();

            assignment.Remove();

            _unitOfWork.Complete();

            return Ok();
        }
    }
}
