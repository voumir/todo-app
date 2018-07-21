using System.Data.Entity.ModelConfiguration;
using TodoApp.WebAPI.Core.Models;

namespace TodoApp.WebAPI.Persistence.EntityConfigurations
{
    public class AssignmentConfiguration : EntityTypeConfiguration<Assignment>
    {
        public AssignmentConfiguration()
        {
            Property(a => a.Id)
                .IsRequired();

            Property(a => a.UserId)
                .IsRequired()
                .HasMaxLength(255);

            Property(a => a.Content)
                .IsRequired()
                .HasMaxLength(255);

            Property(a => a.IsCompleted)
                .IsRequired();

            Property(a => a.CreatedOn)
                .IsRequired()
                .HasMaxLength(50);
        }
    }
}