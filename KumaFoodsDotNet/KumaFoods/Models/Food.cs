using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace KumaFoods.Models
{
    public class Food
    {


        [Key]
        public String FoodName { get; set; }
        public String FoodDescription { get; set; }

     }
}
