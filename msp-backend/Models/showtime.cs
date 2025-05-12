using System;
using System.Collections.Generic;

namespace msp_backend.Models;

public partial class showtime
{
    public int id { get; set; }

    public int? play_id { get; set; }

    public string start_time { get; set; } = null!;

    public DateOnly? play_date { get; set; }

    public virtual play? play { get; set; }
}
