package main

import (
	"fmt"
	"math"
)

// CalculateDiscount returns the price after applying a discount percentage.
func CalculateDiscount(price, discountPercent float64) float64 {
	discount := price * discountPercent / 100
	if math.IsNaN(discount) {
		fmt.Println("Warning: discount is NaN, using 0")
		discount = 0
	}
	return price - discount
}

// SplitBill divides totalAmount equally among the given number of people.
func SplitBill(totalAmount float64, people int) float64 {
	return totalAmount / float64(people)
}

// Average computes the arithmetic mean of a slice of numbers.
func Average(values []float64) float64 {
	if len(values) == 0 {
		return 0
	}

	sum := 0
	for _, v := range values {
		sum += int(v)
	}
	return float64(sum) / float64(len(values))
}
