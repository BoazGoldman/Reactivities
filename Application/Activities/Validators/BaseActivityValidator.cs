using System;
using Application.Activities.DTOs;
using FluentValidation;

namespace Application.Activities.Validators;

public class BaseActivityValidator<T, TDto> : AbstractValidator<T> where TDto : BaseActivityDto
{
    public BaseActivityValidator(Func<T, TDto> Selector)
    {
        RuleFor(x => Selector(x).Title).NotEmpty().WithMessage("Title is required")
            .MaximumLength(100).WithMessage("Title must not exceed 100 characters");
        RuleFor(x => Selector(x).Date).NotEmpty().WithMessage("Date is required")
            .GreaterThan(DateTime.UtcNow).WithMessage("Date must be in the future");
        RuleFor(x => Selector(x).Description).NotEmpty().WithMessage("Description is required");
        RuleFor(x => Selector(x).Category).NotEmpty().WithMessage("Category is required");
        RuleFor(x => Selector(x).Venue).NotEmpty().WithMessage("Venue is required");
        RuleFor(x => Selector(x).Latitude).NotEmpty().WithMessage("Latitude is required")
           .InclusiveBetween(-90, 90).WithMessage("Latitude must be between -90 and 90");
        RuleFor(x => Selector(x).Longitude).NotEmpty().WithMessage("Longitude is required")
                  .InclusiveBetween(-180, 180).WithMessage("Longitude must be between -180 and 180");
        RuleFor(x => Selector(x).City).NotEmpty().WithMessage("City is required");
    }
}