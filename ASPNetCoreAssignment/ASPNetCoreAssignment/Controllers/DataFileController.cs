using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ASPNetCoreAssignment.Models;
using ASPNetCoreAssignment.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ASPNetCoreAssignment.Controllers
{
    [Route("api/datafile")]
    [ApiController]
    public class DataFileController : ControllerBase
    {
        private readonly IDataFileService _dataFileService;
        public DataFileController(IDataFileService dataFileService)
        {
            this._dataFileService = dataFileService;
        }

        [HttpPost, Route("upload")]
        public string Upload(IFormFile dataFile) // ở client, hàm onChanrge của form add vào object FormData 1 key-value pair có key là "dataFile" nên buộc tên của object IFormFile này phải là dataFile để lấy được dữ liệu này
        {
            using (var memoryStream = new MemoryStream())
            {
                dataFile.CopyTo(memoryStream);
                var fileContent = memoryStream.ToArray();

                DataFile file = new DataFile
                {
                    Content = fileContent,
                    Name = dataFile.FileName,
                    Type = dataFile.ContentType
                };

                _dataFileService.CreateDataFile(file);

            }

            return "create operation success";
        }

        [HttpGet, Route("download/{id}")]
        public IActionResult Download(long id)
        {
            DataFile dataFile = _dataFileService.GetDataFile(id);
            byte[] fileContent = dataFile.Content;
            string fileType = dataFile.Type;
            string fileName = dataFile.Name;

            return File(fileContent, fileType, fileName);
        }

        [HttpGet]
        public List<DataFileMetaData> GetListMetaData()
        {
            return _dataFileService.GetListMetaData();
        }

        [HttpDelete, Route("{id}")]
        public string DeleteDataFile(long id)
        {
            if (_dataFileService.DeleteDataFile(id))
            {
                return "delete operation success";
            }
            else return "delete operation fail";
        }

        [HttpPut("{id}/{newName}")]
        public string UpdateMetaData(long id, string newName)
        {
            DataFileMetaData dataFileMetaData = new DataFileMetaData
            {
                Id = id,
                Name = newName
            };

            if (_dataFileService.UpdateMetaData(dataFileMetaData)) return "update operation success";
            else return "update operation fail";

        }
    }
}
