/**
 * @param {string} s
 * @return {boolean}
 * 
 * https://leetcode.com/problems/valid-parentheses/description/
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */
var isValid = function(s) {
    var stack = [];
    var sLength = s.length;
    var open = ['(','{','['];
    var close = [')','}',']'];
    if (!open.includes(s[0])) {
        return false;
    }
    for (let i = 0; i < sLength; i++) {
        let curItem = s[i];
        if (open.includes(curItem)) {
            stack.push(curItem);
            continue;
        } 
        if (close.includes(curItem)){
            if (stack.length === 0){
                return false;
            }
            let temp = stack.pop(); 
            if ((temp ==='(' && curItem ===')') || (temp ==='{' && curItem ==='}') || (temp ==='[' && curItem ===']')) {
                continue;
            } else {
                return false;
            }
        }
    }
    return stack.length === 0 ? true : false;
};