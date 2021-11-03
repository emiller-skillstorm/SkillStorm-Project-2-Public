using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NET_Project_2.Domain
{
    public class AvailablePlan
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }
        public double Price { get; set; }
        public int DeviceLimit { get; set; }
        public int DataLimit { get; set; }
    }
}
