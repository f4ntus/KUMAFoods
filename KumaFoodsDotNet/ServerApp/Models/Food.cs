using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApp.Models
{
    public class Food
    {


        [Key]
        public String FoodName { get; set; }
        public String FoodDescription { get; set; }
        public Double Fruktosegehalt { get; set; }
        public Double Sorbitgehalt { get; set; }
        public Double Glukosegehalt { get; set; }
        public Double Saccharosegehalt { get; set; }

    }
}
