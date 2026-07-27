# Async Test Calculator

This repository contains a small Go calculator and a Node.js wrapper used to
exercise review and package-install workflows.

## Usage

```bash
go run calculator.go 12.5 + 3
node index.js 12.5 + 3
```

Run the Go checks with:

```bash
GO111MODULE=off go test .
```
