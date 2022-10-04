//I - print numbers

//the numbers from 1 to n

function printFirst(n){
    for (i = 1; i <= n; i++) {
        console.log(i);
    }
}

//from n to 1

function printLast(n) {
    for (i = n; i >= 1; i--) {
        console.log(i);
    }
}

//from -n to n

function minusNToN(n) {
    for (i = -n ; i <= n; i++) {
        console.log(i);
    }
}



//the odd numbers from 1 to n

function oddNumbers(n) {
    for(i = 1; i <= n; i += 2) {
        console.log(i);
    }
}

// oddNumbers(10)

// II - print random number of integers

let random = Math.floor(Math.random() * 100);
function randomNumber(random) {
if (random > 0) {
    for(i = 0; i <= random; i++) {
        console.log(i);
    }
}
}

// randomNumber(random);

//all even numbers

function allEven (number) {
    for (i = 2; i <= number; i +=2) {
        console.log(i);
    }
}

// allEven(34);

//III - throw dices

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function throwDices(nemberOfDices, actualNumber) {
    let result = 0;
    for (i  = 0; i < nemberOfDices; i++) {
        let tempNumber = getRandomInt(6);
        if (tempNumber === actualNumber) result+=1;
        console.log(tempNumber)
    }
    console.log(result);
}

// throwDices(20, 1);