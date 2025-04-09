/* 
    Description of desired interactions for todo list application
    1) user needs to type into input, when text is present btn is active
    if no text in input then btn is disables

    2) must connect button to add item to list

    3) each item will need a delete button to remove item  
*/

//capture input and elements 
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add');
//listen to events
input.addEventListener('input', onTypeTodo);

//functions
function onTypeTodo(){
    //disable 
    addBtn.disabled = input.value.length === 0;
}


