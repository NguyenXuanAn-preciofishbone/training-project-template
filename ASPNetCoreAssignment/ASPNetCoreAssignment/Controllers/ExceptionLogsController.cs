using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ASPNetCoreAssignment.Models;

namespace ASPNetCoreAssignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExceptionLogsController : ControllerBase
    {
        private readonly TrainingAssignmentDbContext _context;

        public ExceptionLogsController(TrainingAssignmentDbContext context)
        {
            _context = context;
        }

        // GET: api/ExceptionLogs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExceptionLog>>> GetExceptionLogs()
        {
            return await _context.ExceptionLogs.ToListAsync();
        }

        // GET: api/ExceptionLogs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ExceptionLog>> GetExceptionLog(long id)
        {
            var exceptionLog = await _context.ExceptionLogs.FindAsync(id);

            if (exceptionLog == null)
            {
                return NotFound();
            }

            return exceptionLog;
        }

        // PUT: api/ExceptionLogs/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExceptionLog(long id, ExceptionLog exceptionLog)
        {
            if (id != exceptionLog.id)
            {
                return BadRequest();
            }

            _context.Entry(exceptionLog).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExceptionLogExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ExceptionLogs
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ExceptionLog>> PostExceptionLog(ExceptionLog exceptionLog)
        {
            _context.ExceptionLogs.Add(exceptionLog);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetExceptionLog", new { id = exceptionLog.id }, exceptionLog);
        }

        // DELETE: api/ExceptionLogs/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ExceptionLog>> DeleteExceptionLog(long id)
        {
            var exceptionLog = await _context.ExceptionLogs.FindAsync(id);
            if (exceptionLog == null)
            {
                return NotFound();
            }

            _context.ExceptionLogs.Remove(exceptionLog);
            await _context.SaveChangesAsync();

            return exceptionLog;
        }

        private bool ExceptionLogExists(long id)
        {
            return _context.ExceptionLogs.Any(e => e.id == id);
        }
    }
}
