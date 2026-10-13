const test = require('node:test');
const assert = require('node:assert');

// Same-day dispatch: orders placed before 9am (UTC) leave the warehouse today.
function shipsToday(now) {
  return now.getUTCHours() < 9;
}

// Use fixed times, so the result never depends on when the tests run.
test('an order placed at 8:30am ships today', () => {
  assert.strictEqual(shipsToday(new Date('2026-10-13T08:30:00Z')), true);
});

test('an order placed at 10:30am ships tomorrow', () => {
  assert.strictEqual(shipsToday(new Date('2026-10-13T10:30:00Z')), false);
});
