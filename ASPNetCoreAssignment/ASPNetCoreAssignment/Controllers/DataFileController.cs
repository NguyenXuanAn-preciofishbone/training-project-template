using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ASPNetCoreAssignment.Models;
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
        private TrainingAssignmentDbContext _context;
        public DataFileController(TrainingAssignmentDbContext context)
        {
            this._context = context;
        }

        [HttpPost, Route("upload")]
        public string Upload(IFormFile dataFile)
        {
            using (var memoryStream = new MemoryStream())
            {
                dataFile.CopyTo(memoryStream);
                var fileContent = memoryStream.ToArray();

                this._context.DataFile.Add(new DataFile()
                {
                    content = fileContent,
                    name = dataFile.FileName,
                    createdBy = User.Identity.Name,
                    dateModified = "Placeholder",
                    type = dataFile.ContentType
                });
                this._context.SaveChanges();
            }

            return "success";
        } 

        [HttpGet, Route("download/{id}")]
        public IActionResult Download(long id)
        {
            DataFile selectedFile = this._context.DataFile.ToList().Find(p => p.id == id);
            Console.WriteLine(selectedFile.name);
            byte[] fileContent = selectedFile.content;
            string fileType = selectedFile.type;
            string fileName = selectedFile.name;

            return File(fileContent, fileType,fileName);
        }

        [HttpGet]
        public List<DataFileMetaData> GetDataFile()
        {
            return  _context.DataFile.Select(file => new DataFileMetaData() { 
                id = file.id,
                name = file.name,
                createdBy = file.createdBy,
                dateModified = file.dateModified
            }).ToList();
        }
    }
}
