using System;
using System.Runtime.CompilerServices;

namespace Application.Core;

public class Result<T>
{
    public bool IsSuccess { get; set; }
    public T? value { get; set; }
    public string? Error { get; set; }

    public int code { get; set; }

    public static Result<T> Success<T>(T value) => new() { IsSuccess = true, value = value };
    public static Result<T> Failure(string error, int code) => new() {IsSuccess = false, Error = error, code = code};
   
}
