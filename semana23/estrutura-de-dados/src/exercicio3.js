"use strict";
exports.__esModule = true;
exports.queue = exports.Queue = void 0;
var exercicio1_1 = require("./exercicio1");
var Queue = /** @class */ (function () {
    function Queue() {
        this.nodes = new exercicio1_1.LinkedList(exercicio1_1.firstNode);
    }
    Queue.prototype.isEmpty = function () {
        return this.nodes.start === undefined;
    };
    Queue.prototype.enqueue = function (value) {
        this.nodes.appendToTail(value);
    };
    Queue.prototype.dequeue = function () {
        if (this.nodes.start) {
            var nodeToDequeue = this.nodes.start;
            this.nodes.start = this.nodes.start.next;
        }
    };
    Queue.prototype.print = function () {
        this.nodes.print();
    };
    return Queue;
}());
exports.Queue = Queue;
exports.queue = new Queue();
