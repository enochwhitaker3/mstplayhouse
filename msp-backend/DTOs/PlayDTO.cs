namespace msp_backend.DTOs;

public class PlayDTO
{
    public int Id { get; set; }
    public int Sponsor_Id { get; set; }
    public string? Title { get; set; }
    public DateTime Start_Date { get; set; }
    public DateTime End_Date { get; set; }
    public string? Poster { get; set; }
    public string? Director { get; set; }
}