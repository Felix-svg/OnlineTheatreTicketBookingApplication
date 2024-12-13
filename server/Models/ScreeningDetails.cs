using System;

namespace server.Models;

public class ScreeningDetails
{
    public int ScreeningID { get; set; }
    public int MovieID { get; set; }
    public int TheatreID { get; set; }
    public int NoOfSeatsAvailable { get; set; }
    public int TicketPrice { get; set; }
}
