
// Add a title attribute to every element that has the important class, stating This is an important item. Tip: adding a title attribute to an element is different from changing the title of a document.
// Select all the img tags and loop through them. If they have no important class, turn their display property to none
// Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
// Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
let importantItems = document.querySelectorAll(".important")
for (const iterator of importantItems) {
    iterator.title = 'This is an important item'
}

for (const iterator of importantItems) {
    console.log(iterator.title)
}

let images = document.querySelectorAll('img');

for (const iterator of images) {
    if(iterator.className !== 'important') {
     iterator.style.display = 'none';
     console.log(iterator.className);
    }
}

let paragraphs = document.querySelectorAll('p');

for (const iterator of paragraphs) {
    console.log(iterator.innerText);
    if(iterator.className !== '') console.log(iterator.className);
    if(iterator.className === '') iterator.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

