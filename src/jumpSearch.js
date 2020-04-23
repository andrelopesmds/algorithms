function jumpSearch(sortedArray, target) {
    const arrayLength = sortedArray.length;
    const jumpSize = Math.floor(Math.sqrt(arrayLength));
    let startIndex = 0;
    let endIndex = jumpSize;

    while (target > sortedArray[Math.min(endIndex, arrayLength)] - 1) {
        startIndex = endIndex;
        endIndex += jumpSize;

        if (startIndex > arrayLength) return -1;
    }

    let index = startIndex;
    while (index < Math.min(endIndex, arrayLength)) {
        if (sortedArray[index] === target) {
            return index;
        }

        index += 1;
    }

    return -1;
}

module.exports = jumpSearch;
