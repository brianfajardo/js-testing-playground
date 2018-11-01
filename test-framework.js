// Example usage: test('x should do something', x())

async function test(title, callback) {
  try {
    await callback(); // await callback to resolve 
    console.log(`✅ ${title}`);
  } catch (error) {
    console.log(`❌ ${title}`);
    console.error(error);
  }
}

module.exports = test;
