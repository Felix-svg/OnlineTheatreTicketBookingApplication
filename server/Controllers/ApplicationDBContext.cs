using System;
using Microsoft.Extensions.Configuration.UserSecrets;
using server.Models;

namespace server.Controllers;

public class ApplicationDBContext
{
    public static List<UserDetails> _usersList = new List<UserDetails>{
           new UserDetails
        {
            UserID = 1,
            Name = "John Doe",
            Email = "john@mail.com",
            Password = "1234",
            PhoneNumber = "123-456-7890",
            Balance = 100,
            Image = new string[] { "profile.jpg" }
        },
        new UserDetails
        {
            UserID = 2,
            Name = "Jane Smith",
            Email = "jane@mail.com",
            Password = "5678",
            PhoneNumber = "987-654-3210",
            Balance = 200,
            Image = new string[] { "profile2.jpg" }
        }
    };

    public static List<MovieDetails> _moviesList = new List<MovieDetails>
    {
        new MovieDetails{MovieID=1,MovieName="Bagubali 2", Language="Telugu"},
        new MovieDetails{MovieID=2,MovieName="Ponniyin Selvan", Language="Tamil"},
        new MovieDetails{MovieID=3,MovieName="Cobra", Language="Tamil"},
        new MovieDetails{MovieID=4,MovieName="Vikram", Language="Hindi (Dubbed)"},
        new MovieDetails{MovieID=5,MovieName="Vikram", Language="Tamil"},
        new MovieDetails{MovieID=6,MovieName="Beast", Language="English"},
    };

    public static List<TheatreDetails> _theatresList = new List<TheatreDetails>
    {
        new TheatreDetails{TheatreID=1,TheatreName="Inox", TheatreLocation="Anna Nagar"},
        new TheatreDetails{TheatreID=2,TheatreName="Ega Theatre", TheatreLocation="Chetpet"},
        new TheatreDetails{TheatreID=3,TheatreName="Kamala", TheatreLocation="Vadapalani"},
    };

    public static List<BookingDetails> _bookingsList = new List<BookingDetails>{
        new BookingDetails{BookingID= 1,UserID=1,MovieID=1,TheatreID=1,SeatCount=1,TotalAmount=200,BookingStatus=BookingStatus.Booked},
        new BookingDetails{BookingID= 2,UserID=2,MovieID=2,TheatreID=2,SeatCount=1,TotalAmount=300,BookingStatus=BookingStatus.Booked}
    };

    public static List<ScreeningDetails> _screeningsList = new List<ScreeningDetails>
    {
        new ScreeningDetails{ScreeningID=1,MovieID=1,TheatreID=1,TicketPrice=200,NoOfSeatsAvailable=5},
        new ScreeningDetails{ScreeningID=2,MovieID=2,TheatreID=1,TicketPrice=300,NoOfSeatsAvailable=2},
        new ScreeningDetails{ScreeningID=3,MovieID=6,TheatreID=1,TicketPrice=50,NoOfSeatsAvailable=1},
        new ScreeningDetails{ScreeningID=4,MovieID=1,TheatreID=2,TicketPrice=400,NoOfSeatsAvailable=11},
        new ScreeningDetails{ScreeningID=5,MovieID=5,TheatreID=2,TicketPrice=300,NoOfSeatsAvailable=20},
        new ScreeningDetails{ScreeningID=6,MovieID=4,TheatreID=2,TicketPrice=500,NoOfSeatsAvailable=2},
        new ScreeningDetails{ScreeningID=7,MovieID=5,TheatreID=3,TicketPrice=100,NoOfSeatsAvailable=11},
        new ScreeningDetails{ScreeningID=8,MovieID=2,TheatreID=3,TicketPrice=200,NoOfSeatsAvailable=20},
        new ScreeningDetails{ScreeningID=9,MovieID=4,TheatreID=3,TicketPrice=350,NoOfSeatsAvailable=2},
    };
}
