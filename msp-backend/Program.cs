using Microsoft.EntityFrameworkCore;
using msp_backend.Data;
using msp_backend.Services.Plays;
using Npgsql;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContextFactory<MainStreetDbContext>(config => config.UseNpgsql(builder.Configuration.GetConnectionString("mspdb"), builder =>
{
	builder.EnableRetryOnFailure(5, TimeSpan.FromSeconds(10), null);
}));

builder.Services.AddSingleton<IPlayService, PlayService>();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:4200/")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});




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
