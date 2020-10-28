var calculateSumTo = function (numb, sum) {
    if (sum === void 0) { sum = 0; }
    if (numb === 0) {
        return sum;
    }
    else {
        return calculateSumTo(numb - 1, sum + numb);
    }
};
console.log(calculateSumTo(5));
console.log(calculateSumTo(20));
console.log(calculateSumTo(25));
