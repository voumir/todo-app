namespace TodoApp.WebAPI.Core.Dtos
{
    public class AssignmentGetDto
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public string CreatedOn { get; set; }
        public bool IsCompleted { get; set; }
    }
}