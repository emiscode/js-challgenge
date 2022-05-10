function sortedSquaredArray(sortedArray) {
    const squared = sortedArray.map(item => Math.pow(item, 2));
    
    return squared.sort((coin, next) => coin - next);
}

module.exports = sortedSquaredArray;