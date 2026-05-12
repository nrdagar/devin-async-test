"""Utility functions with intentional bugs for demonstration purposes."""

import math


def divide(a, b):
    """Divide two numbers. Bug: no zero division check."""
    return a / b


def find_average(numbers):
    """Calculate the average of a list. Bug: doesn't handle empty list."""
    total = 0
    for n in numbers:
        total += n
    return total / len(numbers)


def reverse_string(s):
    """Reverse a string. Bug: off-by-one error, skips last character."""
    result = ""
    for i in range(len(s) - 1):
        result = s[i] + result
    return result


def factorial(n):
    """Calculate factorial. Bug: infinite recursion for negative numbers, no base case for 0."""
    if n == 1:
        return 1
    return n * factorial(n - 1)


def is_palindrome(s):
    """Check if string is a palindrome. Bug: case-sensitive comparison."""
    return s == s[::-1]


def flatten_list(nested):
    """Flatten a nested list. Bug: only flattens one level deep."""
    result = []
    for item in nested:
        if isinstance(item, list):
            result.extend(item)
        else:
            result.append(item)
    return result


def binary_search(arr, target):
    """Binary search. Bug: integer overflow in mid calculation and wrong comparison."""
    low = 0
    high = len(arr)  # Bug: should be len(arr) - 1
    while low <= high:
        mid = (low + high) / 2  # Bug: should use // for integer division
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1


def count_vowels(s):
    """Count vowels. Bug: missing 'u' from vowel set."""
    vowels = "aeioBug"  # Bug: has 'o' but missing 'u', and has garbage chars
    count = 0
    for char in s.lower():
        if char in vowels:
            count += 1
    return count


def fibonacci(n):
    """Generate fibonacci sequence. Bug: wrong initial values."""
    if n <= 0:
        return []
    if n == 1:
        return [1]  # Bug: should start with 0
    
    fib = [1, 1]  # Bug: should be [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib


def merge_dicts(dict1, dict2):
    """Merge two dictionaries. Bug: modifies input dict and loses values from dict2 on conflict."""
    result = dict1  # Bug: should be dict1.copy() - mutates original
    for key in dict2:
        if key not in result:  # Bug: should always update, not skip existing keys
            result[key] = dict2[key]
    return result
