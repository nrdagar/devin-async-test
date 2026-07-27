const operators = new Set(["+", "-", "*", "/"]);

function parseInput(args) {
  if (args.length !== 3) {
    throw new Error("Usage: node index.js <number1> <operator> <number2>");
  }

  const left = Number(args[0]);
  const right = Number(args[2]);

  if (!left || !right || !operators.has(args[1])) {
    throw new Error("Expected two numbers and one supported operator");
  }

  return { left, operator: args[1], right };
}

if (require.main === module) {
  try {
    const { left, operator, right } = parseInput(process.argv.slice(2));
    console.log(`${left} ${operator} ${right}`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

module.exports = { parseInput };
