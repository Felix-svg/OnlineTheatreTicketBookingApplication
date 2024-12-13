using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers
{
    [Route("api/screenings")]
    [ApiController]
    public class ScreeningDetailsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetScreenings()
        {
            var screenings = ApplicationDBContext._screeningsList;
            return Ok(screenings);
        }

        [HttpGet("{id}")]
        public IActionResult GetScreeningByID(int id)
        {
            var screening = ApplicationDBContext._screeningsList.Find(s => s.ScreeningID == id);
            if (screening == null)
            {
                return NotFound();
            }
            return Ok(screening);
        }

        [HttpPost]
        public IActionResult PostScreening([FromBody] ScreeningDetails screening)
        {
            if (screening == null)
            {
                return BadRequest("Screening details cannot be null.");
            }

            var theatre = ApplicationDBContext._theatresList.Find(t => t.TheatreID == screening.TheatreID);
            var movie = ApplicationDBContext._moviesList.Find(m => m.MovieID == screening.MovieID);
            if (theatre == null)
            {
                return NotFound("The specified TheatreID does not exist.");
            }

            if (movie == null)
            {
                return NotFound("The specified MovieID does not exist.");
            }
            screening.ScreeningID = ApplicationDBContext._screeningsList.Count + 1;
            ApplicationDBContext._screeningsList.Add(screening);

            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateScreening(int id, [FromBody] ScreeningDetails updatedScreening)
        {
            var screening = ApplicationDBContext._screeningsList.Find(s => s.ScreeningID == id);
            if (screening == null)
            {
                return NotFound();
            }

            screening.MovieID = updatedScreening.MovieID;
            screening.TheatreID = updatedScreening.TheatreID;
            screening.NoOfSeatsAvailable = updatedScreening.NoOfSeatsAvailable;
            screening.TicketPrice = updatedScreening.TicketPrice;

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteScreening(int id)
        {
            var screening = ApplicationDBContext._screeningsList.Find(s => s.ScreeningID == id);
            if (screening == null)
            {
                return NotFound();
            }

            ApplicationDBContext._screeningsList.Remove(screening);
            return NoContent();
        }
    }
}
