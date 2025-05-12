using msp_backend.DTOs;

namespace msp_backend.Services.Plays
{
    public interface IPlayService
    {
        Task<PlayDTO> CreatePlayAsync(PlayDTO play);
        Task<PlayDTO> GetPlayByIdAsync(int id);
        Task<List<PlayDTO>> GetAllPlaysAsync();
        Task<PlayDTO> UpdatePlayAsync(PlayDTO play);
        Task<bool> DeletePlayAsync(int id);
    }
}