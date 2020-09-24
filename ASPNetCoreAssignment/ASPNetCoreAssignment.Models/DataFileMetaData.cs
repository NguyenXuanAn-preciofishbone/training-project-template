using System;
using System.Collections.Generic;
using System.Text;

namespace ASPNetCoreAssignment.Models
{
    public class DataFileMetaData
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string CreatedBy { get; set; }
        public string DateModified { get; set; }
        public string Type { get; set; }
    }
}
