using Microsoft.EntityFrameworkCore;
using msp_backend.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:4200/")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddDbContextFactory<MainStreetDbContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString("mspdb"),
        npgsql => npgsql.EnableRetryOnFailure(5, TimeSpan.FromSeconds(10), null)
    )
);

builder.Services.AddControllers(); 

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "MainStreet API V1");
        c.RoutePrefix = string.Empty;
    });
}

app.UseHttpsRedirection();
app.UseCors();

app.MapControllers();

app.Run();
