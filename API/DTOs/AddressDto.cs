using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class AddressDto
{
    [Required]
    public required string Line1 = string.Empty;

    [Required]
    public string? Line2 { get; set; }

    [Required]
    public required string City = string.Empty;

    [Required]
    public required string State = string.Empty;

    [Required]
    public required string PostalCode = string.Empty;

    [Required]
    public required string Country = string.Empty;
}