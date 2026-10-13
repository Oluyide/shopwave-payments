const test = require('node:test');
const assert = require('node:assert');

// Same-day dispatch: orders placed before 9am (UTC) leave the warehouse today.
function shipsToday(now) {
  return now.getUTCHours() < 9;
}

test('an order placed now ships today', () => {
  assert.strictEqual(shipsToday(new Date()), true);
});
