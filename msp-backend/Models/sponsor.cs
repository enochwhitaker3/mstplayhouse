using System;
using System.Collections.Generic;

namespace msp_backend.Models;

public partial class sponsor
{
    public int id { get; set; }

    public string sponsor_name { get; set; } = null!;

    public string? sponsor_address { get; set; }

    public string? sponsor_phonenumber { get; set; }

    public virtual ICollection<play> plays { get; set; } = new List<play>();
}
