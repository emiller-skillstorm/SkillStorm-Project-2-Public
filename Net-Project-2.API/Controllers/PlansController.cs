using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NET_Project_2.Domain;
using Net_Project_2.Data;

namespace Net_Project_2.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlansController : ControllerBase
    {
        private readonly Project2Context _context;

        public PlansController(Project2Context context)
        {
            _context = context;
        }

        // GET: api/Plans
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Plan>>> GetPlans()
        {
            return await _context.Plans.Distinct().ToListAsync();
        }

        // GET: api/AvailablePlans
        [HttpGet("/AvailablePlans/")]
        public async Task<ActionResult<IEnumerable<AvailablePlan>>> GetAvailablePlans()
        {
            return await _context.AvailablePlans.Distinct().ToListAsync();
        }

        // GET: api/Plans/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Plan>> GetPlan(int id)
        {
            var plan = await _context.Plans.FindAsync(id);

            if (plan == null)
            {
                return NotFound();
            }

            return plan;
        }

        //GET: api/Plans/UserPlans/5 
        [HttpGet("UserPlans/{userId}")]
        public async Task<ActionResult<IEnumerable<Plan>>> GetPlansForUser(int userId)
        {
            var planList = await _context.Plans.Where(p => p.UserId == userId).ToListAsync();

            if (planList == null)
            {
                return NotFound();
            }

            return planList;
        }

        // PUT: api/Plans/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPlan(int id, Plan plan)
        {
            if (id != plan.PlanId)
            {
                return BadRequest();
            }

            _context.Entry(plan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlanExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        //Add a new plan to a given user's account
        //POST: api/AddPlanToUser/?uId=3&apId=2
        [HttpPost("AddPlanToUser/")]
        public async Task<IActionResult> AddPlanToUser(int uId, int apId)
        {
            //Get the user and the plan they want to sign up for
            var selectedUser = await _context.Users.FindAsync(uId);
            Console.WriteLine("user with id " + selectedUser.UserId);

            var selectedPlan = await _context.AvailablePlans.FindAsync(apId);
            Console.WriteLine("plan with id " + selectedPlan.Id);

            if (selectedUser != null && selectedPlan != null)
            {
                Plan p = new Plan
                {
                    Name = selectedPlan.Name,
                    Price = selectedPlan.Price,
                    DataLimit = selectedPlan.DataLimit,
                    DeviceLimit = selectedPlan.DeviceLimit,
                    Devices = new List<Device>(),
                    UserId = selectedUser.UserId
                };

                //Add the plan info to the Plans table (plan detals + user identification)
                _context.Plans.Add(p);

                selectedUser.Plans.Add(p);

                _context.SaveChanges();
            }

            return NoContent();
        }

        // POST: api/Plans
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Plan>> PostPlan(Plan plan)
        {
            _context.Plans.Add(plan);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPlan", new { id = plan.PlanId }, plan);
        }

        // DELETE: api/Plans/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePlan(int id)
        {
            var plan = await _context.Plans.FindAsync(id);
            if (plan == null)
            {
                return NotFound();
            }

            _context.Plans.Remove(plan);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PlanExists(int id)
        {
            return _context.Plans.Any(e => e.PlanId == id);
        }
    }
}
