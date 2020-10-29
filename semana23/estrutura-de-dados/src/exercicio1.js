"use strict";
exports.__esModule = true;
exports.numbers = exports.firstNode = exports.LinkedList = exports.LinkedListNode = void 0;
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value, next) {
        if (next === void 0) { next = undefined; }
        this.value = value;
        this.next = next;
    }
    return LinkedListNode;
}());
exports.LinkedListNode = LinkedListNode;
var LinkedList = /** @class */ (function () {
    function LinkedList(start) {
        this.start = start;
    }
    LinkedList.prototype.appendToTail = function (value) {
        if (!this.start) {
            this.start = new LinkedListNode(value);
        }
        else {
            var node = this.start;
            while (node && node.next !== undefined) {
                node = node.next;
            }
            node.next = new LinkedListNode(value);
        }
    };
    LinkedList.prototype.print = function () {
        var node = this.start;
        var i = 1;
        while (node !== undefined) {
            console.log("Elemento " + i + ": ", node.value);
            node = node.next,
                i++;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
exports.firstNode = new LinkedListNode(1, new LinkedListNode(2, new LinkedListNode(3, new LinkedListNode(4))));
exports.numbers = new LinkedList(exports.firstNode);
