using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NET_Project_2.Domain
{
    public class Plan
    {
        public int PlanId { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public int DeviceLimit { get; set; }
        public int DataLimit { get; set; }
        public List<Device> Devices { get; set; } = new List<Device>();
        public User User { get; set; }
        public int UserId { get; set; }

    }

}
