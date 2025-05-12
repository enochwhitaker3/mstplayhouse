using Microsoft.AspNetCore.Mvc;
using msp_backend.DTOs;
using msp_backend.Services.Plays;

[ApiController]
[Route("plays")]
public class PlaysController : ControllerBase
{
    private readonly IPlayService playService;
    public PlaysController(IPlayService playService)
    {
        this.playService = playService;
    }

    [HttpGet("getallplays")]
    public async Task<List<PlayDTO>> GetAllPlays()
    {
        return await playService.GetAllPlaysAsync();
    }
}
