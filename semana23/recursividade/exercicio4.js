var arrayNumbers = [0, 1, 2, 3, 4, 5, 15];
var printArray = function (arrayNumbers, i) {
    if (i === void 0) { i = arrayNumbers.length - 1; }
    if (i >= 0) {
        printArray(arrayNumbers, i - 1);
        console.log("Element in position " + i + " =", arrayNumbers[i]);
    }
};
printArray(arrayNumbers);
