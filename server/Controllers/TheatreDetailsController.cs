using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers
{
    [Route("api/theatres")]
    [ApiController]
    public class TheatreDetailsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetTheatres()
        {
            return Ok(ApplicationDBContext._theatresList);
        }

        [HttpGet("{id}")]
        public IActionResult GetTheatreByID(int id)
        {
            var theatre = ApplicationDBContext._theatresList.Find(t => t.TheatreID == id);
            if (theatre == null)
            {
                return NotFound();
            }
            return Ok(theatre);
        }

        [HttpPost]
        public IActionResult PostTheatre([FromBody] TheatreDetails theatre)
        {
            theatre.TheatreID = ApplicationDBContext._theatresList.Count + 1;
            ApplicationDBContext._theatresList.Add(theatre);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult PutTheatre([FromBody] TheatreDetails updatedTheatre, int id)
        {
            var theatre = ApplicationDBContext._theatresList.Find(t => t.TheatreID == id);
            if (theatre == null)
            {
                return NotFound();
            }

            theatre.TheatreName = updatedTheatre.TheatreName;
            theatre.TheatreLocation = updatedTheatre.TheatreLocation;

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTheatre(int id)
        {
            var theatre = ApplicationDBContext._theatresList.Find(t => t.TheatreID == id);
            if (theatre == null)
            {
                return NotFound();
            }

            ApplicationDBContext._theatresList.Remove(theatre);
            return NoContent();
        }
    }
}
