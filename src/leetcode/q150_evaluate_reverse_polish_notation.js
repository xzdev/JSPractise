/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    if (!tokens || tokens.length) {
        return 0;
    }

    for (let i = 0, len = tokens.length ; i < len; i++) {
        if (tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*' || tokens[i] === '/') {
            let o2 = parseInt(stack.pop(), 10);
            let o1 = parseInt(stack.pop(), 10);
            switch(tokens[i]) {
                case '+':
                    stack.push(o1 + o2);
                    break;
                case '-':
                    stack.push(o1 - o2);
                    break;
                case '*':
                    stack.push(o1 * o2);
                    break;
                case '/':
                    stack.push(o1 / o2);
                    break;
            }
        } else {
            stack.push(token[i]);
        }
    }
    return stack.pop();
};

console.log(evalRPN( ["2", "1", "+", "3", "*"]));