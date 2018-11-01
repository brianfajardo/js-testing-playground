// This function is intentionally broken to see errors in tests.
const sum = (a, b) => a - b;

// Simulates an async function by returning a resolved Promise.
const sumAsync = (a, b) => Promise.resolve(sum(a, b));

module.exports = { sum, sumAsync };
