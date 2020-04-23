const jumpSearch = require('../src/jumpSearch');
const constants = require('./constants');

test('results are correct for each search', () => {
  constants.forEach(constant => {
    const result = jumpSearch(constant.sortedArray, constant.target);
    const expected = constant.index;
    expect(result).toBe(expected);
  });
});