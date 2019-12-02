using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using KumaFoods.Models;
using System.Diagnostics;

namespace KumaFoods.Controllers
{
    public class FoodController : Controller
    {
        private DataContext context;
        public FoodController(DataContext ctx)
        {
            context = ctx;
        }
        public IActionResult Index()
        {
            return View(context.Foods.First());
        }
        public IActionResult Privacy()
        {
            return View();
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None,
        NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel
            {
                RequestId = Activity.Current?.Id
            ?? HttpContext.TraceIdentifier
            });
        }
    }
}
    }
}
