namespace AquaSort.Api.Models
{
    public class Usuario
    {
        public int id { get; set; }
        public string usuario { get; set; } = string.Empty;
        public string contraseña { get; set; } = string.Empty;
        public string email { get; set; } = string.Empty;
    }
}
