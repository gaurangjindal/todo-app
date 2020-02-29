localStorage.tasks = JSON.stringify([]);

function addEvent(){

// take inout from input box
//take task from localstorage
// and then store in ul(array)
// push (new element) into array 
// update that array to local storage 
//empty the input box
// update list


let input = document.getElementById("task-input");

let tasks = JSON.parse(localStorage.tasks);

tasksArr.push(input.value);

localStorage.tasks = JSON.stringify(tasksArr);

input.value = "";

updateList();
}


