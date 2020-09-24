namespace ASPNetCoreAssignment.Models
{
    public class DataFile
    {
        public long Id { get; set; }
        public byte[] Content {get; set;}
        public string Name { get; set; }
        public string CreatedBy { get; set; }
        public string DateModified { get; set; }
        public string Type { get; set; }
    }
}
