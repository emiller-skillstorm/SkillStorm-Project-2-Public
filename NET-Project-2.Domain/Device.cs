using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NET_Project_2.Domain
{
    public class Device
    {
        public int DeviceId { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public PhoneNumber PhoneNumber { get; set; }
        // public int PhoneNumberId { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}
