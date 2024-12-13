using System;
using System.Text.Json.Serialization;

namespace server.Models;

public class BookingDetails
{
    public int BookingID { get; set; }
    public int UserID { get; set; }
    public int MovieID { get; set; }
    public int TheatreID { get; set; }
    public int SeatCount { get; set; }
    public int TotalAmount { get; set; }
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public BookingStatus BookingStatus { get; set; }
}

public enum BookingStatus
{
    Booked = 1,
    Cancelled = 2
}