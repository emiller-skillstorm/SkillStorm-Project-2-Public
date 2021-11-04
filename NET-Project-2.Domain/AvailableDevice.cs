using System;
using System.ComponentModel.DataAnnotations;

namespace NET_Project_2.Domain
{
    public class AvailableDevice
    {
        [Key]
        public int Id { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
    }
}

