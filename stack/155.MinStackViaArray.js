/* 
https://leetcode.com/problems/min-stack/description/
Design a stack via array and get it minimum value.

getMin() -- Retrieve the minimum element in the stack.
top() -- Get the top element.
*/
var getMin = function(numbers) {
    if (numbers.length) {
        var min = numbers[0];
        var size = numbers.length;
        for (let i = 1; i < size; i++) {
            min = Math.min(min, numbers[i]);
        }
        return min;
    }
}

var top = function(numbers) {
    return numbers[numbers.length - 1];
}