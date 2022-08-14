// const { default: test } = require('node:test');
// const { check } = require('yargs');
// const checkIfEqual = require('../lib/random.js');

// test('check if 10 is equal to 10', () => {
//     expect(checkIfEqual(10, 10)).toBe(true)
// });

const randomNumber = require('../lib/random.js');

test('gets random number between 1 and 10', () => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1);
    expect(randomNumber()).toBeLessThanOrEqual(10);
});