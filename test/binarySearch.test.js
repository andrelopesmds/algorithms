const binarySearch = require('../src/binarySearch');
const constants = require('./constants');

test('results are correct for each search', () => {
  constants.forEach(constant => {
    const result = binarySearch(constant.sortedArray, constant.target);
    const expected = constant.index;
    expect(result).toBe(expected);
  });
});