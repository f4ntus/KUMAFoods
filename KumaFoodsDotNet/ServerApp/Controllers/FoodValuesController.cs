using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServerApp.Models;


/* JOSC: This Class is an Controller for the Webservices of foods. 
 * you can get an single food with the following link:
 * https://localhost:5001/api/foods/Gurke -> you will receive an Gurke Object
 * 
 * it is also possible to receive the hole food Data with Link:
 * https://localhost:5001/api/foods
 * 
 * 
 */

namespace ServerApp.Controllers
{
    [Route("api/foods")]
    [ApiController]
    public class FoodValuesController : Controller
    {
        private DataContext context;
        public FoodValuesController(DataContext ctx)
        {
            context = ctx;
        }
        [HttpGet("{name}")]
        public Food GetFood(String name)
        {
            System.Threading.Thread.Sleep(5000);
            return context.Foods.Find(name);
        }
        [HttpGet]
        public IEnumerable<Food> GetProducts()
        {
            IQueryable<Food> query = context.Foods;
            return query;
        }
    }
}