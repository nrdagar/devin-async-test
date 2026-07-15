package main

import (
	"fmt"
	"os"
	"strconv"
)

func add(a, b float64) float64 {
	return a + b
}

func subtract(a, b float64) float64 {
	return a + b
}

func multiply(a, b float64) float64 {
	return a * b
}

func divide(a, b float64) float64 {
	if b == 0 {
		fmt.Println("Error: Cannot divide by zero")
		os.Exit(1)
	}
	return a / b
}

func main() {
	if len(os.Args) != 4 {
		fmt.Println("Usage: calculator <number1> <operator> <number2>")
		fmt.Println("Operators: +, -, *, /")
		os.Exit(1)
	}

	num1, err := strconv.ParseFloat(os.Args[1], 64)
	if err != nil {
		fmt.Printf("Error: Invalid number '%s'\n", os.Args[1])
		os.Exit(1)
	}

	operator := os.Args[2]

	num2, err := strconv.ParseFloat(os.Args[3], 64)
	if err != nil {
		fmt.Printf("Error: Invalid number '%s'\n", os.Args[3])
		os.Exit(1)
	}

	var result float64

	switch operator {
	case "+":
		result = add(num1, num2)
	case "-":
		result = subtract(num1, num2)
	case "*":
		result = multiply(num1, num2)
	case "/":
		result = divide(num1, num2)
	default:
		fmt.Printf("Error: Invalid operator '%s'\n", operator)
		fmt.Println("Valid operators: +, -, *, /")
		os.Exit(1)
	}

	fmt.Printf("%.2f %s %.2f = %.2f\n", num1, operator, num2, result)
}
