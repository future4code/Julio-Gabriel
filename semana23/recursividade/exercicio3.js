var calculateSumToIterative = function (numb) {
    var sum = 0;
    for (var i = 0; i <= numb; i++) {
        sum += i;
    }
    return sum;
};
console.log(calculateSumToIterative(5));
console.log(calculateSumToIterative(20));
console.log(calculateSumToIterative(25));
