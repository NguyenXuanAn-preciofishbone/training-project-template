using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ASPNetCoreAssignment.Repositories.Entities
{
    internal class DataFileEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public byte[] Content {get; set;}
        public string Name { get; set; }
        public string CreatedBy { get; set; }
        public string DateModified { get; set; }
        public string Type { get; set; }
    }
}
