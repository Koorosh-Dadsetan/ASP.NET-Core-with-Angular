using System;
using System.Collections.Generic;

namespace ASP.NET_Core_with_Angular.Models;

public partial class Call
{
    public int Id { get; set; }

    public string FullName { get; set; } = null!;

    public string Phone { get; set; } = null!;
}
