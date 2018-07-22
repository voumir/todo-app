namespace TodoApp.WebAPI.Core.Dtos
{
    public class AssignmentUpdateDto
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public bool IsCompleted { get; set; }
    }
}