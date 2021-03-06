﻿using AutoMapper;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
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
        private readonly IMapper _mapper;

        public AssignmentsController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet]
        public IEnumerable<AssignmentGetDto> Get()
        {
            var userId = User.Identity.GetUserId();

            if (userId == null)
                throw new HttpResponseException(HttpStatusCode.Unauthorized);

            var assignments = _unitOfWork.Assignments.GetUsersAssignments(userId);

            return assignments.Select(_mapper.Map<Assignment, AssignmentGetDto>).ToList();
        }

        [HttpGet]
        [Route("api/assignments/{id}")]
        public AssignmentGetDto Get(int id)
        {
            var userId = User.Identity.GetUserId();

            if (userId == null)
                throw new HttpResponseException(HttpStatusCode.Unauthorized);

            var assignment = _unitOfWork.Assignments.GetAssignment(id);

            if (assignment == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);

            return _mapper.Map<AssignmentGetDto>(assignment);
        }

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
