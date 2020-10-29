"use strict";
exports.__esModule = true;
exports.stacks = exports.firstNode = exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.nodes = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.nodes.length > 0;
    };
    Stack.prototype.push = function (value) {
        this.nodes.push(value);
    };
    Stack.prototype.pop = function () {
        var nodeToPop = this.nodes[this.nodes.length - 1];
        this.nodes[this.nodes.length - 1] = undefined;
        this.nodes.length -= 1;
        return nodeToPop;
    };
    Stack.prototype.print = function () {
        for (var i = 0; i < this.nodes.length; i++) {
            console.log("Elemento " + (i + 1) + ": ", this.nodes[i]);
        }
    };
    return Stack;
}());
exports.Stack = Stack;
exports.firstNode = new Stack;
exports.stacks = new Stack;
