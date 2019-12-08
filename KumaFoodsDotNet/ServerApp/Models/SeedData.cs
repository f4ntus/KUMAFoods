using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ServerApp.Models
{
    public class SeedData
    {
        public static void SeedDatabase(DataContext context)
        {
            context.Database.Migrate();

            if (context.Foods.Count() == 0)
            {
                context.Foods.AddRange(
                    new Food { FoodName = "Gurke", FoodDescription = "Dies ist eine Gurke" },
                    new Food { FoodName = "Tomate", FoodDescription = "Dies ist eine Tomate" },
                    new Food { FoodName = "Karotte", FoodDescription = "Dies ist eine Karotte" },
                    new Food { FoodName = "Paprika", FoodDescription = "Dies ist eine Paprika" }

                    );
                context.SaveChanges();
            }

        }
    }
}
