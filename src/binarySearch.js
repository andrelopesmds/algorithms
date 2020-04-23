function binarySearch(sortedArray, target) {
    let lowIndex = 0
    let highIndex = sortedArray.length - 1;

    while (lowIndex <= highIndex) {
        const index = lowIndex + Math.floor((highIndex - lowIndex)/2);

        if (sortedArray[index] === target) {
            return index
        } else if (sortedArray[index] < target) {
            lowIndex = index + 1;
        } else {
            highIndex = index - 1;
        }
    }

    return -1;
}

module.exports = binarySearch;
