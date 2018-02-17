/**
 * @param {string} s
 * @return {boolean}
 * 
 * https://leetcode.com/problems/valid-parentheses/description/
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */
var isValid = function(s) {
    let stack = [];
    const sLength = s.length;
    
    const obj_open = { '(': ')',
    '{': '}',
    '[': ']'};
    const obj_close = reverseHash(obj_open);

    if (obj_open[s[0]] === undefined) {
        return false;
    }
    for (let i = 0; i < sLength; i++) {
        let curItem = s[i];
        if (obj_open[curItem] !== undefined) {
            stack.push(curItem);
            continue;
        } else if (obj_close[curItem] !== undefined) {
            if (stack.length === 0){
                return false;
            }
            let temp = stack.pop(); 
            if (obj_open[temp] !== curItem) {
                return false;
            }
        } else
        throw new Error('Symbol type exception');
    }
    return stack.length === 0 ? true : false;
};
var reverseHash = function(hash) {
    let obj_close = {};
    let keys = Object.keys(hash);
    for (let key of keys) {
        obj_close[hash[key]] = key;
    }
    return obj_close;
}