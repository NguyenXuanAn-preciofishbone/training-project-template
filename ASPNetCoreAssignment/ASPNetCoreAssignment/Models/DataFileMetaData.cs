using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNetCoreAssignment.Models
{
    public class DataFileMetaData
    {
        public long id { get; set; }
        public string name { get; set; }
        public string createdBy { get; set; }
        public string dateModified { get; set; }
    }
}
