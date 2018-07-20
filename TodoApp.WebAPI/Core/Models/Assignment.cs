using System.ComponentModel.DataAnnotations;

namespace TodoApp.WebAPI.Core.Models
{
    public class Assignment
    {
        [Required]
        public int Id { get; set; }

        [Required]
        [StringLength(255)]
        public string UserId { get; set; }

        [Required]
        [StringLength(255)]
        public string Content { get; set; }

        [Required]
        public bool IsCompleted { get; set; }

        [Required]
        [StringLength(50)]
        public string CreatedOn { get; set; }
    }
}