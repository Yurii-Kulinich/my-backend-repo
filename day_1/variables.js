// the sum
function sum (a, b){
    return a + b;
}

// the division

function division (a, b) {
    return a / b;
}

// the modulo

function modulo(a, b) {
    return a % b;
}

// concatenate

function concatenate(a, b) {
    return a + b;
}

// VAT

function vat(input) {
    return input + input / 100 * 21;
}

//Circle

function circle(radius) {
    return radius ** 2 * 3.14;
}

//Time

function time (hours, minutes, seconds) {
    let hourResult = hours * 3600;
    let minutesResult = minutes * 60;
    return hourResult + minutesResult + seconds;
}
// console.log(time(2, 2, 30))

