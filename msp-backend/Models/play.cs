using System;
using System.Collections.Generic;

namespace msp_backend.Models;

public partial class play
{
    public int id { get; set; }

    public int? sponsor_id { get; set; }

    public string title { get; set; } = null!;

    public DateOnly start_date { get; set; }

    public DateOnly end_date { get; set; }

    public string poster { get; set; } = null!;

    public string director { get; set; } = null!;

    public virtual ICollection<showtime> showtimes { get; set; } = new List<showtime>();

    public virtual sponsor? sponsor { get; set; }
}
