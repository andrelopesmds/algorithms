const linearSearch = require('../src/linearSearch');
const constants = require('./constants');

test('results are correct for each search', () => {
  constants.forEach(constant => {
    const result = linearSearch(constant.sortedArray, constant.target);
    const expected = constant.index;
    expect(result).toBe(expected);
  });
});