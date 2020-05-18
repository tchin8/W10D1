const ul = document.querySelector('.todos');
const form = document.querySelector('.add-todo-form');
const todos = JSON.parse(localStorage.getItem('todos')) || [];

function addTodo(e) {
    e.preventDefault();
    const addTodoHTML = document.querySelector('[name=add-todo]').value;
    const todo = {done: false, addTodoHTML};
    todos.push(todo);
    
    populateList(todos);
    
    localStorage.setItem('todos', JSON.stringify(todos));
    
    e.currentTarget.reset();
}

function populateList(todos) {
    ul.innerHTML = todos.map((todo, i) => {
        return `
        <li>
            <label>
                <input type="checkbox" data-index=${i} ${todo.done ? "checked" : ""}/>
                ${todo.addTodoHTML}
            </label>
        </li>
        `;

    }).join('');
}
// const input = document.createElement('input');
// input.setAttribute('type', 'checkbox');

// const label = document.createElement('label');
// label.innerHTML = todo.addTodoHTML;
// label.appendChild(input);

// const li = document.createElement('li');
// li.appendChild(label);

function checked(e) {
    const index = e.target.dataset.index;
    // console.log(todos[index].done);


    if (todos[index].done) {
        todos[index].done = false;
        // console.log(todos[index].done);
    } else {
        todos[index].done = true;
        // console.log(todos[index].done);
    }

    
    localStorage.setItem('todos', JSON.stringify(todos));
    populateList(todos);
    //target is the element that triggered the event (e.g., the user clicked on)
    // currentTarget is the element that the event listener is attached to
}

form.addEventListener('submit', addTodo);
ul.addEventListener('click', checked);

// ul.addEventListener('click', function(e) {
//     if (e.target && e.target.nodeName === "li") {
//         checked(e);
//     }
// });

populateList(todos);
