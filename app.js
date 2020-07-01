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
 }; // end function



function  show() {
    var todos = get_todos();

    var html = '<ul>'   // add each todo item to the string as a <li>

    for ( var i = 0; i < todos.length ; i++)
    {
        html += '<li>' + todos[i] + '<button id= "removeItem'+[i]+'">Delete Item</button></li>';
        console.log(html);        

    }

    html += '</ul>';

    document.getElementById('todos').innerHTML = html;


}; // end function

function remove(){
    var todos = get_todos();   
    list = todos.JSON.parse();

    for (i = 0; i < todos.length; i++)    
    {
        document.getElementById('removeItem'+i).addEventListener.('click', remove);
    }
    

}; // end function



document.getElementById('addTodo').addEventListener('click', add);


document.getElementById("removeItem0").addEventListener('click', remove);



/* Notes on deleting todo items

1. you need a unique ID for each item
2. you need a delete button - that can be accessed individually in JS (ID)
3. you can use the ID for each item to give its button a unique ID.
4. you can grab the ID for the todo that is to be deleted using JS.
5. remember you can create HTML using strings including IDs.
6. to remove an element from an array use the function slice().

buttons have to have an event listener - those will be created at the time you dynamically create a button.

*/