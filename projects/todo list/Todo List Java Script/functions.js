function addTodo(event){
    //prevent the form from refreshing the page
    event.preventDefault();

    //validating there is content in the input
    if(todoInput.value == ""){
        alert("come on man, put some todo in...")
        return;
    }

    //creating the todo div
    const todoDiv= document.createElement("div");
    todoDiv.classList.add("todo");
    
    //creating the todo li
    const newTodo= document.createElement("li");
    newTodo.innerText= todoInput.value;
    newTodo.classList.add("todo-item");

    //inserting the newTodo into the todoDiv
    todoDiv.appendChild(newTodo);

    //activating the local storage function
    saveLocalTodos(todoInput.value);
    
    //creating the buttons
    //complete btn
    const completedButton= document.createElement("button");
    completedButton.innerHTML= "<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //trash btn
    const trashButton= document.createElement("button");
    trashButton.innerHTML= "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //appending to the ul
    todoList.appendChild(todoDiv);

    //clearing todoInput value
    todoInput.value= "";

    //adding numberings
    numberingTodos()
}

function deleteCheck(e){
    //storing the element clicked on
    const item= e.target;
    
    //deleting the todo
    if(item.classList[0] === "trash-btn"){
        //catching the div to delete and removing it
        const todo= item.parentElement;

        //a little animation
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener("transitionend", function(){
            todo.remove();

            //adding numberings
            numberingTodos();
        })
    }
    
    //complete todo
    if(item.classList[0] === "complete-btn"){
        //catching the div to add class
        const todo= item.parentElement;
        todo.classList.toggle("completed");
    }
        //focus on the li
        todoText.focus();
}

//filtering which option to show
function filterTodo(e){
    //geting all the childs of the ul
    const todo= todoList.childNodes;

    //running on the childs to know what do display
    todo.forEach(function(todo){
        switch(e.target.value){
            case "all": todo.style.display= "flex";
            break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display= "flex";
                    numberingTodos();
                }else{
                    todo.style.display= "none";
                }
            break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display= "flex";
                    numberingTodos();
                }else{
                    todo.style.display= "none";
                }
                break;
        }
    })
}

//function to save todos in local storage
function saveLocalTodos(todo){
    let todos;
    
    //chcking if there is something in local storage
    if(localStorage.getItem("todos") === null){
        todos= [];
    }else{
        todos= JSON.parse(localStorage.getItem("todos"));
    }

    //adding new todo to array and local storage
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

//adding the local storage to the screen
function getTodos(){
    let todos;
    
    //chcking if there is something in local storage
    if(localStorage.getItem("todos") === null){
        todos= [];
    }else{
        todos= JSON.parse(localStorage.getItem("todos"));
    }

    //actually adding to the screen
    todos.forEach(function(todo){
        const todoDiv= document.createElement("div");
        //creating the todo div
        todoDiv.classList.add("todo");
        
        //creating the todo li
        const newTodo= document.createElement("li");
        newTodo.innerText= todo;
        newTodo.classList.add("todo-item");

        //inserting the newTodo into the todoDiv
        todoDiv.appendChild(newTodo);

        //creating the buttons
        //complete btn
        const completedButton= document.createElement("button");
        completedButton.innerHTML= "<i class='fas fa-check'></i>";
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        //trash btn
        const trashButton= document.createElement("button");
        trashButton.innerHTML= "<i class='fas fa-trash'></i>";
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        //appending to the ul
        todoList.appendChild(todoDiv);
    })
}

//removing stuff from local storage
function removeLocalTodos(todo){
    let todos;
    
    //chcking if there is something in local storage
    if(localStorage.getItem("todos") === null){
        todos= [];
    }else{
        todos= JSON.parse(localStorage.getItem("todos"));
    }
    
    //getting the position of the todo
    const todoIndex= todo.children[0].innerText;

    //removing it from the array
    todos.splice(todos.indexOf(todoIndex), 1);
    
    //saving it in the local storage
    localStorage.setItem("todos", JSON.stringify(todos));
}

//numbering the todos
function numberingTodos(){
    let todoDivs= document.querySelectorAll(".todo");
    todoDivs.forEach((element, index)=>{
        const numSpan= document.createElement("span");
        numSpan.innerText= index + 1 + ".";
        if(!element.querySelector("span")){
            element.insertBefore(numSpan, element.firstChild);
        }else{
            const numSpan = element.querySelector("span");
            numSpan.innerText = index + 1 + ".";
        }
    })
};

//adds numbers to the todos
setTimeout(numberingTodos, 100);