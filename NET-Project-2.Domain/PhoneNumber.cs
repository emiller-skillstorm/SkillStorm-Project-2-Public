using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NET_Project_2.Domain
{
    public class PhoneNumber
    {
        public int Id { get; set; }
        public string PhoneNumberVal { get; set; }
        public User User { get; set; }
        //public Device Device { get; set; }

        // I dont think we need this as Entity should figure this out for us? As long as we have the line above
        public int UserId { get; set; }
    }
}
