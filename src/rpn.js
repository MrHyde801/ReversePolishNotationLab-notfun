/**
Write a javascript program that takes in a string that 
contains a Reverse Polish Notation expression and 
returns the result of the expression. Use your stack 
and queue implementation to help you with the algorithm.

Examples:
    Input: 4 5 *
    Result: 20
    Input: 3 5 10 + * 
    Result: 45

Note: the expression will always have space separated 
      inputs like "4 5 *" rather than "45*" or "4 4*"
 */

function rpn(expression) {
    let rpnArray = []
    let input = expression.split(' ')
    if(input === '' ) {
        return 0;
    }

    for(let i = 0; i<input.length; i++) {
        if(!isNaN(input[i])) {
            rpnArray.push(input[i]);
        } else {
            let a = rpnArray.pop();
            let b = rpnArray.pop();
            if(input[i] === "+") {
                rpnArray.push(parseInt(a) + parseInt(b));
            } else if(input[i] === "-") {
                rpnArray.push(parseInt(a) - parseInt(b));
            } else if(input[i] === "*") {
                rpnArray.push(parseInt(a) * parseInt(b));
            } else if(input[i] === "/") {
                rpnArray.push(parseInt(a) / parseInt(b));
            } 
        }
    }
    return rpnArray[0]
        
}



