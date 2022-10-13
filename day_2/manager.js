

const input = require('readline-sync');
let taskList = ['1 first', '2 second', '3 third'];
const menu = ['Welcome to your task manager, Press:', '1. to see all your tasks', '2. to add a task', '3. to delete a task', '4. to mark a task as done', '5. to Exit the task manager' ]
// let info = input.question("Question text... ");
// console.log(info);
let infinity = true;
const readMenu = () => {
    for (const iterator of menu) {
        console.log(iterator);
    }
}

const readTasks = () => {
    console.log('Here is the list of your tasks:')
    for (const iterator of taskList) {
        console.log(iterator);
    }
}

const addTask = () => {
    let reply = input.question('Add your task');
    taskList.push((taskList.length + 1) + ' ' + reply);
}

const removeTask = () => {
    let reply = input.question("Enter the number of a task that you want to be removed?");
    // console.log(reply);
    taskList.splice(Number(reply) - 1, 1);
    for(let i = 0; i < taskList.length; i++) {
        let task = taskList[i];
        
        let char = task[0];
        let replaced = task.replace(char, (i + 1));
        
        taskList[i] = replaced;
        
    }
}

const markDone = () => {
    let reply = Number(input.question("Eneter the number of a task to be marked as DONE")) - 1;
    taskList[reply] += ' [DONE]';
    
}

const wrongChoise = () => {
    let reply = Number(input.question((' You have to enter the number from 1 to 5, try again. Please make your choise')));
    
    while(true) {
        // console.log("You have to enter the number from 1 to 5, try again");
        
        if (reply > 0 && reply < 6) {
            console.log("Well done");           
            break;
        }
        reply = Number(input.question((' You have to enter the number from 1 to 5, try again. Please make your choise')));
    }
    return reply;
}

const wellDone = (answer) => {
    switch (answer) {
        case 1: readTasks();
        break;
        case 2: addTask();
        break;
        case 3: removeTask();
        break;
        case 4: markDone();
        break;
        case 5: 
        fs = require('fs');
        fs.writeFileSync("my_file.txt", taskList);
        infinity = false;
    }
}
function manager() {
     
    // let reply = 0;
    let i = 1
    while(infinity) {
        readMenu();

        let reply = Number(input.question(('Please make your choise')));
        
        if (reply <1  || reply > 5)  {
           reply = wrongChoise();                 
        }
        wellDone(reply);  
}
}

manager()
// readTasks();
// markDone();
// readTasks()
