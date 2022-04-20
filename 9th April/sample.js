/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var removeDuplicates = function(s, k) {
    const character_stack = [];
    const count_stack = [];
    
    // For each character in s ...
    for(const c of s){        
        if(c !== peek(character_stack)){
            // If the caracter c is DIFFERENT from the character at the top of the character stack ...
            character_stack.push(c);
            count_stack.push(1);
        }else{
            // If the character c is the SAME as the character at the top of the character stack ....
            character_stack.push(c);
            count_stack[count_stack.length-1] += 1;
        }
        console.log(character_stack, count_stack)
        
        // If we've seen the caracter at the top of the character stack k times in a row, we remove it from the character stack by popping k times
        
        if(peek(count_stack) === k){
            for(let i = 0; i < k; ++i){
                character_stack.pop();
            }
            // We've removed all repreated occurences of the characer from the top of character stack, so we also pop its count from the count stack
            count_stack.pop();
        }
    }
    
    console.log(character_stack.join(''));
};


// Helper function ...

function peek(stack){
    return stack[stack.length - 1];
}

removeDuplicates("pbbcggttciiippooaais", 2);