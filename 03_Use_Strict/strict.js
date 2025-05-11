'use strict';

//x = 3.14;  // This will cause an error
let x = 3.14;  // Now we declare the variable
console.log(x);

function strictFunction() {
    'use strict';
    let y = 3.14;  // This is fine
    z = 42;  // This will cause an error
}

strictFunction();