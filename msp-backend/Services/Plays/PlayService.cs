using Microsoft.EntityFrameworkCore;
using msp_backend.Data;
using msp_backend.DTOs;
using msp_backend.Services.Plays;

public class PlayService : IPlayService
{
    private readonly IDbContextFactory<MainStreetDbContext> _dbContextFactory;

    public PlayService(IDbContextFactory<MainStreetDbContext> dbContextFactory)
    {
        _dbContextFactory = dbContextFactory;
    }

    public Task<PlayDTO> CreatePlayAsync(PlayDTO play)
    {
        throw new NotImplementedException();
    }

    public Task<bool> DeletePlayAsync(int id)
    {
        throw new NotImplementedException();
    }

    public async Task<List<PlayDTO>> GetAllPlaysAsync()
    {
        using var context = _dbContextFactory.CreateDbContext();
        
        return await context.plays
        .Select(play => new PlayDTO
            {
                Id = play.id,
                Sponsor_Id = play.sponsor_id,
                Title = play.title,
                Start_Date = play.start_date,
                End_Date = play.end_date,
                Poster = play.poster,
                Director = play.director
            })
            .ToListAsync();

    }

    public Task<PlayDTO> GetPlayByIdAsync(int id)
    {
        throw new NotImplementedException();
    }

    public Task<PlayDTO> UpdatePlayAsync(PlayDTO play)
    {
        throw new NotImplementedException();
    }
}