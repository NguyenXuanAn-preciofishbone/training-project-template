using ASPNetCoreAssignment.Models;
using System.Collections.Generic;

namespace ASPNetCoreAssignment.Repositories
{
    public interface IDataFileRepository
    {
        void CreateDataFile(ASPNetCoreAssignment.Models.DataFile dataFile);
        DataFile GetDataFile(long id);
        List<DataFileMetaData> GetListMetaData();
        bool DeleteDataFile(long id);
        bool UpdateMetaData(DataFileMetaData dataFileMetaData);
    }
}
