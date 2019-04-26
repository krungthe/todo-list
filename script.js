var todoList = {
  todos: [],
  displayTodos: function() {
   if (this.todos.length === 0) {
     console.log("your todo list is empty!");
   } else {
      console.log('My Todos:');
      for (var i=0; i < this.todos.length; i++) {
       if (this.todos[i].completed === true) {
        console.log("(x)" , i+1, this.todos[i].todoText);
      } else {
        console.log("( )" , i+1, this.todos[i].todoText);
      }
     }
   }
  },
  addTodo: function(todoText) {
    this.todos.push ({
     todoText: todoText,
      completed: false
   });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
   this.todos[position - 1].todoText = todoText;
   this.displayTodos();
  },
  deleteTodo: function(position) {
   this.todos.splice(position - 1,1);
   this.displayTodos();
  },
  toggleCompleted: function(position) {
    this.todos[position-1].completed = !this.todos[position-1].completed;
    this.displayTodos();
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
    this.displayTodos();
  }
};

var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  addTodo: function() {
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    if (addTodoTextInput.value != "") {
      todoList.addTodo(addTodoTextInput.value);
      addTodoTextInput.value = "";
    };
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    var chanTodoTextInput = document.getElementById("changeTodoTextInput");
    if (changeTodoPositionInput.value != "") {
      todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
      changeTodoPositionInput.value = "";
      chanTodoTextInput.value = "";
    };
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
    if (toggleCompletedPositionInput != "") {
      todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
      toggleCompletedPositionInput.value = "";
    }
  },
  toggleAll: function() {
    todoList.toggleAll();
  }
};
