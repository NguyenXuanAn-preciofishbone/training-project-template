using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ASPNetCoreAssignment.Models
{
    public class DataFile
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long id { get; set; }
        public byte[] content {get; set;}
        public string name { get; set; }
        public string createdBy { get; set; }
        public string dateModified { get; set; }
        public string type { get; set; }
    }
}
