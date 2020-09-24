using ASPNetCoreAssignment.Models;
using System.Collections.Generic;

namespace ASPNetCoreAssignment.Services
{
    public interface IDataFileService
    {
        void CreateDataFile(DataFile dataFile);
        DataFile GetDataFile(long id);
        List<DataFileMetaData> GetListMetaData();
        bool DeleteDataFile(long id);
        bool UpdateMetaData(DataFileMetaData dataFileMetaData);
    }
}
