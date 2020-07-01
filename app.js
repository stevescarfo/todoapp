show();

function get_todos() {
    //grab data from local storage
    var todos = new Array();

    var todosString = localStorage.getItem("todos");

    // convert to JSON

    if (todosString !== null) {

        todos = JSON.parse(todosString);

    };

    return todos;    
}; // end function



function add() {

    var todos = get_todos();

    var textBoxContent = document.getElementById('itemToAdd').value;

    todos.push(textBoxContent);

    localStorage.setItem('todos',JSON.stringify(todos));

    show();

    document.getElementById('itemToAdd').value = null;

 }; // end function



function  show() {
    var todos = get_todos();

    var html = '<ul>'   // add each todo item to the string as a <li>

    for ( var i = 0; i < todos.length ; i++)
    {
        html += '<li>' + todos[i] + '   <button id= "removeItem'+[i]+'">Delete Item</button></li>';
    }

    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    for (n = 0; n < todos.length; n++)    
    {
        document.getElementById('removeItem'+n).addEventListener('click', remove);
    }

}; // end function

function remove(){
    var todos = get_todos();

    let i = this.id;

    let item = i.substring(10,i.length);

    todos.splice(item, 1);

    localStorage.setItem('todos',JSON.stringify(todos));

    show();

    // will need to get todos
    // use 'this' obj to get ID of button that was clicked. 
    // extract the index integer ( 0 1 ) from that ID. remember multiple digit spaces
    
}; // end function



document.getElementById('addTodo').addEventListener('click', add);

/* MY attempt to get the enter key to work for add function 

document.getElementById('addTodo').addEventListener('keyup', (event) => {  
        console.log(event.key);
        if (event.key === 13) { 
        add();
        }
    }
);

*/




/* Notes on deleting todo items

1. you need a unique ID for each item
2. you need a delete button - that can be accessed individually in JS (ID)
3. you can use the ID for each item to give its button a unique ID.
4. you can grab the ID for the todo that is to be deleted using JS.
5. remember you can create HTML using strings including IDs.
6. to remove an element from an array use the function splice().

buttons have to have an event listener - those will be created at the time you dynamically create a button.

*/