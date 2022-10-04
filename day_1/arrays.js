//I print an array

let myArray = [1, 10, 30, -5, 99];

function printArray(randArray) {
    for (let item of randArray) {
        console.log(item);
    }
}

// printArray(myArray);

//II - maximum

function maxNumber(randArray) {
    let max = randArray[0];

    for (let number of randArray) {
        if(number > max) max = number;
    }

    console.log(max);

}

// maxNumber(myArray);

//III - minimum

function minNumber(randArray) {
    let min = randArray[0];

    for (let number of randArray) {
        if(number < min) min = number;
    }

    console.log(min);

}

// minNumber(myArray);

//IV - minimum position

function minNumberPosition(randArray) {
    let min = Math.min(...randArray);

   

    console.log(randArray.indexOf(min));

}

// minNumberPosition(myArray);

//V - ordered array

let orderedArray = [1, 2, 3, 50, 99, 1001];
let unorderedArray = [0, 10, -5, 100];

function orderedOrNot(randArrray) {

    let result = true;

    for (let i = 1; i <= randArrray.length; i++) {
        if (randArrray[i-1] > randArrray[i]) {
            result = 'false';
            break;
        }
    }
    
    console.log(result);
}

orderedOrNot(orderedArray);
orderedOrNot(unorderedArray);



