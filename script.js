var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push ({
     todoText: todoText,
      completed: false
   });
  },
  changeTodo: function(position, todoText) {
   this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
   this.todos.splice(position,1);
  },
  toggleCompleted: function(position) {
    this.todos[position].completed = !this.todos[position].completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    if (completedTodos === totalTodos) {
    for (var i = 0; i < totalTodos; i++) {
      this.todos[i].completed = false;
     }
    } else {
        for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
       }
    }
  }
};

var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    if (addTodoTextInput.value != "") {
      todoList.addTodo(addTodoTextInput.value);
      addTodoTextInput.value = "";
      view.displayTodos();
    };
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    var chanTodoTextInput = document.getElementById("changeTodoTextInput");
    if (changeTodoPositionInput.value != "") {
      todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
      changeTodoPositionInput.value = "";
      chanTodoTextInput.value = "";
      view.displayTodos();
    };
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
    if (toggleCompletedPositionInput != "") {
      todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
      toggleCompletedPositionInput.value = "";
      view.displayTodos();
    }
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector("ul");
    todosUl.innerHTML = "";
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement("li");
      var todo = todoList.todos[i];
      var todoTextWithCompletion = "";
      
      if (todo.completed === true) {
        todoTextWithCompletion = "(x) " + Number(i+1) + " " + todo.todoText;
      } else {
        todoTextWithCompletion = "( ) " + Number(i+1) + " " + todo.todoText;
      }
      
      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector("ul");
    
    todosUl.addEventListener("click", function(event) {
      var elementClicked = event.target;
      if (elementClicked.className === "deleteButton") {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();
