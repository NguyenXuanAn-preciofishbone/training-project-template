using ASPNetCoreAssignment.Models;
using ASPNetCoreAssignment.Repositories;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace ASPNetCoreAssignment.Services
{
    internal class DataFileService : IDataFileService
    {
        private readonly IDataFileRepository _dataFileRepository;
        public DataFileService(IDataFileRepository dataFileRepository)
        {
            this._dataFileRepository = dataFileRepository;
        }
        public void CreateDataFile(DataFile dataFile)
        {
            _dataFileRepository.CreateDataFile(dataFile);
        }

        public bool DeleteDataFile(long id)
        {
            return _dataFileRepository.DeleteDataFile(id);
        }

        public DataFile GetDataFile(long id)
        {
            return _dataFileRepository.GetDataFile(id);
        }

        public List<DataFileMetaData> GetListMetaData()
        {
            return _dataFileRepository.GetListMetaData();
        }

        public bool UpdateMetaData(DataFileMetaData dataFileMetaData)
        {
            return _dataFileRepository.UpdateMetaData(dataFileMetaData);
        }
    }
}
