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
const todoList = document.getElementById('todolist');
//listen to events
addBtn.addEventListener('click', onClickAdd);
input.addEventListener('input', onTypeTodo);

//functions
function onClickAdd(){
    const li = createListItem(input.value); //create item
    todoList.appendChild(li); //add input
    input.value = ''; //clear input
    addBtn.disabled = true;
}

function onTypeTodo(){
    //disable 
    addBtn.disabled = input.value.length === 0;
}

function createListItem(name){
    const li = document.createElement('li');

    const heading = document.createElement('h2');
    heading.textContent = name;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', onClickDelete);

    li.appendChild(heading);
    li.appendChild(deleteBtn);
    return li;
}

function onClickDelete(){
    this.parentNode.remove();
}
