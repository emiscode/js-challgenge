const sortedSquaredArray = require('../src/sortedSquaredArray.js');

describe('Sorted Squared Array Test', () => {
    
    test(`Test Case 1: [1, 2, 3, 5, 6, 8, 9] squared is equals [1, 4, 9, 25, 36, 64, 81]`, () => {
        const intArray = [1, 2, 3, 5, 6, 8, 9];
        expect(sortedSquaredArray(intArray)).toEqual([1, 4, 9, 25, 36, 64, 81]);
    });

    test(`Test Case 2: [-2, -1] squared is equals [1, 4]`, () => {
        const intArray = [-2, -1];
        expect(sortedSquaredArray(intArray)).toEqual([1, 4]);
    });

    test(`Test Case 3: [-10, -5, 0, 5, 10] squared is equals [0, 25, 25, 100, 100]`, () => {
        const intArray = [-10, -5, 0, 5, 10];
        expect(sortedSquaredArray(intArray)).toEqual([0, 25, 25, 100, 100]);
    });
})
