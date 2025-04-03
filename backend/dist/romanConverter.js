"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRoman = toRoman;
function toRoman(input) {
    let num = input; // ensure it's a number
    const numerals = [
        [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
        [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
        [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
    ];
    let result = '';
    for (const [value, numeral] of numerals) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }
    return result;
}
