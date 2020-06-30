function add() {
    var textBoxContent = document.getElementById('itemToAdd').value;
    localStorage.setItem('todoItem',JSON.stringify(textBoxContent));

    console.log('The value of textBoxContent is ' + textBoxContent);
}


document.getElementById('addTodo').addEventListener('click', add);