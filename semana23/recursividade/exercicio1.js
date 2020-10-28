// 1) a)
var printNumbersAscending = function (numb) {
    if (numb >= 0) {
        printNumbersAscending(numb - 1);
        console.log(numb);
    }
};
printNumbersAscending(3);
// 1) b)
var printNumbersDescending = function (numb) {
    if (numb >= 0) {
        console.log(numb);
        printNumbersDescending(numb - 1);
    }
};
printNumbersDescending(3);
