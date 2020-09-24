using ASPNetCoreAssignment.Models;
using ASPNetCoreAssignment.Repositories.Entities;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using System.Linq;

namespace ASPNetCoreAssignment.Repositories
{
    internal class DataFileRepository : IDataFileRepository
    {
        private readonly ASPNetCoreAssignmentDbContext _context;
        public DataFileRepository(ASPNetCoreAssignmentDbContext context)
        {
            this._context = context;
        }
        public void CreateDataFile(DataFile dataFile)
        {
            this._context.DataFiles.Add(new DataFileEntity()
            {
                Content = dataFile.Content,
                Name = dataFile.Name,
                CreatedBy = "",
                DateModified = "Placeholder",
                Type = dataFile.Type
            }) ;
            this._context.SaveChanges();
        }

        public bool DeleteDataFile(long id)
        {
            var selectedFile = this._context.DataFiles.Find(id);
            if (selectedFile == null)
            {
                return false;
            }
            _context.DataFiles.Remove(selectedFile);
            _context.SaveChanges();
            return true;
        }

        public Models.DataFile GetDataFile(long id)
        {
            DataFileEntity dataFileEntity =  this._context.DataFiles.ToList().Find(p => p.Id == id);
            DataFile dataFile = new DataFile
            {
                Name = dataFileEntity.Name,
                Type = dataFileEntity.Type
            };
            return dataFile;
        }

        public List<DataFileMetaData> GetListMetaData()
        {
            return _context.DataFiles.Select(dataFile => new DataFileMetaData()
            {
                Id = dataFile.Id,
                Name = dataFile.Name,
                CreatedBy = dataFile.CreatedBy,
                DateModified = dataFile.DateModified,
                Type = dataFile.Type
            }).ToList();
        }

        public bool UpdateMetaData(DataFileMetaData dataFileMetaData)
        {
            var editedFile = new DataFileEntity() 
            { 
                Id = dataFileMetaData.Id, 
                Name = dataFileMetaData.Name 
            };
            this._context.DataFiles.Attach(editedFile);
            this._context.Entry(editedFile).Property(x => x.Name).IsModified = true;
            this._context.SaveChanges();
            return true;
        }
    }
}
