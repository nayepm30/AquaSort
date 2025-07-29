using Microsoft.EntityFrameworkCore;
using AquaSort.Api.Models;

namespace AquaSort.Api.Data
{
    public class AquaSortContext : DbContext
    {
        public AquaSortContext(DbContextOptions<AquaSortContext> options) : base(options)
        {
        }

        public DbSet<Usuario> Usuarios { get; set; }
    }
}
