/* 
https://leetcode.com/problems/min-stack/description/
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
*/
var MinStack = function() {
    this.size = 0;
    this.storage = {};
}; 

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.storage[this.size++] = x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.size) {
        return this.storage[this.size--];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.storage[this.size - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.size) {
        var min = this.storage[0];
        var size = this.size;
        for (let i = 1; i < size; i++) {
            min = Math.min(min, this.storage[i]);
        }
        return min;
    }
};
