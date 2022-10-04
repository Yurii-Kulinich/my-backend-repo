// cinema tariffs

let person = {age : 10};8

function security(age){
if (person.age < 18) {
    console.log("Your ticket prise is 8$")
} else console.log("Your ticket price is 10")
}

// security(person);

//maximum 

function max(a, b, c) {
    return console.log(Math.max(a, b, c));
}

max(100, 300, 10);

// day of the week

function dayOfWeek(day) {
    let result = 'undefined';
    switch(day) {
        case 1: console.log('Sunday');
        break;
        case 2: console.log('Monday');
        break;
        case 3: console.log('Tuesday');
        break;
        case 4: console.log('Wednesday');
        break;
        case 5: console.log('Thursday');
        break;
        case 6: console.log('Friday');
        break;
        case 7: console.log('Saturday');
        break;
    }
}

// dayOfWeek(3);

//random

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }




function dice3(max) {
    let first = getRandomInt(max);
    let second = getRandomInt(max);
    let third = getRandomInt(max);
    let result = 0;
    console.log("first number is " + first + " second number is " + second + " third number is " + third);
    if ((first === second || second === third) || first === third) result = 2;
    if (first === second && second === third) result = 3;
    console.log("The result is " + result);
}

// dice3 (3);

//V - print shop

function shop(number) {
    result = 0;
    if (number > 0 && number <= 10) {
        result = 0.12 * number;
    } else if (number > 10 && number <= 30) {
        result = 10 * 0.12 + ((number - 10) * 0.11);
    } else if (number > 30) {
        result = (10 * 0.12) + (20 * 0.11) +((number - 30) * 0.10); 
    } 
    console.log(result);
}

shop(20);


// function withArray (){
//     let array = [0, 0, 0];
//     for (i = 0; i < 3; i++) {
//         array[i] = getRandomInt(2);
//     }

//     console.log(array);
// }

// withArray();

