using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers
{
    [Route("api/bookings")]
    [ApiController]
    public class BookingDetailsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetBookings()
        {
            return Ok(ApplicationDBContext._bookingsList);
        }

        [HttpGet("{id}")]
        public IActionResult GetBooking(int id)
        {
            var booking = ApplicationDBContext._bookingsList.Find(b => b.BookingID == id);
            if (booking == null)
            {
                return NotFound();
            }
            return Ok(booking);
        }

        [HttpPost]
        public IActionResult PostBooking([FromBody] BookingDetails booking)
        {
            booking.BookingID = ApplicationDBContext._bookingsList.Count + 1;
            ApplicationDBContext._bookingsList.Add(booking);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult PutBooking([FromBody] BookingDetails updatedBooking, int id)
        {
            var booking = ApplicationDBContext._bookingsList.Find(b => b.BookingID == id);
            if (booking == null)
            {
                return NotFound();
            }

            booking.SeatCount = updatedBooking.SeatCount;
            booking.TotalAmount = updatedBooking.TotalAmount;
            booking.BookingStatus = updatedBooking.BookingStatus;

            return Ok(booking);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBooking(int id)
        {
            var booking = ApplicationDBContext._bookingsList.Find(b => b.BookingID == id);
            if (booking == null)
            {
                return NotFound();
            }
            ApplicationDBContext._bookingsList.Remove(booking);
            return NoContent();
        }
    }
}
