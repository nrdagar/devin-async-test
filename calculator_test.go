package main

import "testing"

func TestArithmeticOperations(t *testing.T) {
	tests := []struct {
		name string
		got  float64
		want float64
	}{
		{name: "add", got: add(2, 3), want: 5},
		{name: "subtract", got: subtract(8, 3), want: 5},
		{name: "multiply", got: multiply(2, 3), want: 6},
		{name: "divide", got: divide(8, 2), want: 4},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			if test.got != test.want {
				t.Fatalf("%s: got %v, want %v", test.name, test.got, test.want)
			}
		})
	}
}
