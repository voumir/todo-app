using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using TodoApp.WebAPI.Dtos;
using TodoApp.WebAPI.Models;

namespace TodoApp.WebAPI.Controllers
{
    [Authorize]
    public class AssignmentsController : ApiController
    {
        private ApplicationDbContext _context;

        public AssignmentsController()
        {
            _context = new ApplicationDbContext();
        }

        [HttpGet]
        public IEnumerable<Assignment> Get()
        {
            // TODO: Implement Get assignments
        
            var assignments = _context.Assignments
                .ToList();

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

            _context.Assignments.Add(assignment);
            _context.SaveChanges();

            return Ok();
        }
    }
}
