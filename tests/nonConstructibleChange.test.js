const nonConstructibleChange = require('../src/nonConstructibleChange.js');

describe('Non Constructible Change Test', () => {

    test(`Test Case 1: [5, 7, 1, 1, 2, 3, 22] minimum change is 20`, () => {
        const coins = [5, 7, 1, 1, 2, 3, 22];
        expect(nonConstructibleChange(coins)).toBe(20);
    });
    
    test('Test Case 2: [1, 1, 1, 1, 1] minimum change is 6', () => {
        const coins = [1, 1, 1, 1, 1];
        expect(nonConstructibleChange(coins)).toBe(6);
    });
    
    test('Test Case 3: [1, 5, 1, 1, 1, 10, 15, 20, 100] minimum change is 55', () => {
        const coins = [1, 5, 1, 1, 1, 10, 15, 20, 100];
        expect(nonConstructibleChange(coins)).toBe(55);
    });
});
