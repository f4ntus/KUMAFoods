using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.IO;
using System.Text;

namespace ServerApp.Models
{
    public class SeedData
    {
        public static void SeedDatabase(DataContext context)
        {
            context.Database.Migrate();
            var reader = new StreamReader(@".\wwwroot\Ernaehrungstabelle.csv", Encoding.UTF8);
            while (!reader.EndOfStream)
            {
                string line = reader.ReadLine();
                var values = line.Split(';');
                 if (context.Foods.Find(values[0]) == null){
                    context.Foods.Add(new Food
                    {
                        FoodName = values[0],
                        Fruktosegehalt = Convert.ToDouble(values[1]),
                        Sorbitgehalt = Convert.ToDouble(values[2]),
                        Glukosegehalt = Convert.ToDouble(values[3]),
                        Saccharosegehalt = Convert.ToDouble(values[4]),
                    });
                }   
            }
            context.SaveChanges();





            if (context.Foods.Count() == 0)
            {
                context.Foods.AddRange(
                    new Food { FoodName = "Gurke", FoodDescription = "Dies ist eine Gurke" , Fruktosegehalt = 2.5, Sorbitgehalt = 3.4, Glukosegehalt = 4.5, Saccharosegehalt = 2.5  },
                    new Food { FoodName = "Tomate", FoodDescription = "Dies ist eine Tomate" },
                    new Food { FoodName = "Karotte", FoodDescription = "Dies ist eine Karotte" },
                    new Food { FoodName = "Paprika", FoodDescription = "Dies ist eine Paprika" }

                    );
                context.SaveChanges();
            }
          

        }
    }
}
