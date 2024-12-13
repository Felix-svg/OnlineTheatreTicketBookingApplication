using System;

namespace server.Models;

public class UserDetails
{
    public int UserID { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string PhoneNumber { get; set; }
    public string[] Image { get; set; }
    public int Balance { get; set; }
}
