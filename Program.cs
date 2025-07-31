using Microsoft.EntityFrameworkCore; // <-- Agrega este using si no lo tienes
using AquaSort.Api.Data; // <-- El namespace donde está tu AquaSortContext

var builder = WebApplication.CreateBuilder(args);

// Agregar servicios
builder.Services.AddControllers();

// REGISTRA AQUÍ TU CONTEXTO
builder.Services.AddDbContext<AquaSortContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddDistributedMemoryCache();

builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

// Configurar CORS para permitir Angular con credenciales
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular", policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials();
    });
});

var app = builder.Build();

app.UseHttpsRedirection();

app.UseCors("AllowAngular");

app.UseSession();

app.UseAuthorization();

app.MapControllers();

app.Run();
