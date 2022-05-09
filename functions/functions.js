// FUNCTION SYNTAX

function doSomething(x) {
    return x;
}

let doSomething = function (x) {
    return x;
}

// ARROW FUNCTIONS

let doSomething = (x) => {
    return x;
}

let doSomething = x => x; // returns x

let doSomething = x => x + 1; // returns x + 1

let doSomething = (x, y) => {
    let z = x + y;
    return z;
}

// NAMED FUNCTION AS AN ARGUMENT

let getOne = function () {
    return 1;
}

let getNumber = function(funk) {
    return funk();
}

getNumber(getOne); // returns 1

// ANONYMOUS FUNCTION AS AN ARGUMENT

getNumber(function () {
    return 1;
})

// ARROW FUNCTION AS AN ARGUMENT

getNumber(() => 1) // same as above, returns 1

