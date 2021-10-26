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


        // I dont think we need this as Entity should figure this out for us? As long as we have the line above
        public int UserId { get; set; }

        //public Plan Plan { get; set; } makes a many to one relationship with plan
    }
}
