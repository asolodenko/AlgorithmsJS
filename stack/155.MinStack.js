/* 
https://leetcode.com/problems/min-stack/description/
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
*/
var MinStack = function() {
    this._size = 0;
    this._storage = {};
}; 

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this._storage[this._size++] = x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let size = this._size,
        deletedData;
 
    if (size) {
        deletedData = this._storage[size];
 
        delete this._storage[size];
        this._size--;
 
        return deletedData;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this._storage[this._size - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this._size) {
        let min = this._storage[0];
        const size = this._size;
        const storage = this._storage;
        for (let i = 1; i < size; i++) {
            min = Math.min(min, storage[i]);
        }
        return min;
    }
};
