/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicateLetters = function(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
      var char = s[i];
      // if s[i] already appears in stack, jump to next loop
      if (stack.indexOf(char) > -1) continue;
     while (
        // when stack is not empty
        stack.length > 0 &&
        // when top of stack letter dictionary order is greater than s[i](z > a)
        stack[stack.length - 1] > char &&
        // when top of stack letter still appears in s not iterated yet letters
        s.indexOf(stack[stack.length - 1], i) > i
      ) {
        // remove top of stack
        stack.pop();
      }
      // put s[i] into top of stack
      stack.push(char);
    }
    return stack.join("");
  };