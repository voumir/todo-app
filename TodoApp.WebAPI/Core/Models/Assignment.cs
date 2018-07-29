using TodoApp.WebAPI.Core.Dtos;

namespace TodoApp.WebAPI.Core.Models
{
    public class Assignment
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Content { get; set; }
        public bool IsCompleted { get; set; }
        public bool IsRemoved { get; private set; }
        public string CreatedOn { get; set; }

        public void Update(AssignmentUpdateDto dto)
        {
            Content = dto.Content ?? Content;
            IsCompleted = dto.IsCompleted;
        }

        public void Remove()
        {
            IsRemoved = true;
        }
    }
}