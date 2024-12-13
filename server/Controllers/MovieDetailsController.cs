using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers
{
    [Route("api/movies")]
    [ApiController]
    public class MovieDetailsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetMovies()
        {
            return Ok(ApplicationDBContext._moviesList);
        }

        [HttpGet("{id}")]
        public IActionResult GetMovieByID(int id)
        {
            var movie = ApplicationDBContext._moviesList.Find(m => m.MovieID == id);
            if (movie == null)
            {
                return NotFound();
            }
            return Ok(movie);
        }

        [HttpPost]
        public IActionResult PostMovie([FromBody] MovieDetails movie)
        {
            movie.MovieID = ApplicationDBContext._moviesList.Count + 1;
            ApplicationDBContext._moviesList.Add(movie);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult PutMovie([FromBody] MovieDetails updatedMovie, int id)
        {
            var movie = ApplicationDBContext._moviesList.Find(m => m.MovieID == id);
            if (movie == null)
            {
                return NotFound();
            }

            movie.MovieName = updatedMovie.MovieName;
            movie.Language = updatedMovie.Language;

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteMovie(int id)
        {
            var movie = ApplicationDBContext._moviesList.Find(m => m.MovieID == id);
            if (movie == null)
            {
                return NotFound();
            }

            ApplicationDBContext._moviesList.Remove(movie);
            return Ok();
        }
    }
}
