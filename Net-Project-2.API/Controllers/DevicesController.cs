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
    public class DevicesController : ControllerBase
    {
        private readonly Project2Context _context;

        public DevicesController(Project2Context context)
        {
            _context = context;
        }

        // GET: api/Devices
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Device>>> GetDevices()
        {
            return await _context.Devices.ToListAsync();
        }

        // GET: api/Devices/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Device>> GetDevice(int id)
        {
            var device = await _context.Devices.FindAsync(id);

            if (device == null)
            {
                return NotFound();
            }

            return device;
        }

        // GET: api/UserDevices/5
        [HttpGet("UserDevices/{userId}")]
        public async Task<ActionResult<IEnumerable<Device>>> GetDevicesForUser(int userId)
        {
            var deviceList = await _context.Devices.Include(d => d.PhoneNumber).Where(d => d.UserId == userId).ToListAsync();

            if (deviceList == null)
            {
                return NotFound();
            }

            return deviceList;
        }

        // PUT: api/Devices/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDevice(int id, Device device)
        {
            if (id != device.DeviceId)
            {
                return BadRequest();
            }

            _context.Entry(device).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DeviceExists(id))
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

        // POST: api/Devices
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Device>> PostDevice(Device device)
        {
            _context.Devices.Add(device);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDevice", new { id = device.DeviceId }, device);
        }

        // Change the phone number for a device
        // POST: api/Devices/ChangePhoneNumber/?deviceId=1&phoneId=3
        [HttpPost("/ChangePhoneNumber/")]
        public async Task<ActionResult<Device>> ChangePhoneNumber(int deviceId, int phoneId)
        {
            var device = await _context.Devices.FindAsync(deviceId);
            var oldDevice = (await _context.Devices.Include(d => d.PhoneNumber).Where(d => d.PhoneNumber.Id == phoneId).ToListAsync()).FirstOrDefault();

            if (oldDevice != null) // The number was already in use. Remove it from the old device and add it to the new device.
            {
                oldDevice.PhoneNumber = null;
                
            }

            device.PhoneNumber = await _context.PhoneNumbers.FindAsync(phoneId);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDevice", new { id = device.DeviceId }, device);
        }

        // DELETE: api/Devices/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDevice(int id)
        {
            var device = await _context.Devices.FindAsync(id);
            if (device == null)
            {
                return NotFound();
            }

            _context.Devices.Remove(device);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DeviceExists(int id)
        {
            return _context.Devices.Any(e => e.DeviceId == id);
        }
    }
}
