var todoList = {
todos: [],
displayTodos: function(){
  console.log('My Todos:');
  for (var i=0; i < this.todos.length; i++) {
    console.log(i+1, this.todos[i].todoText);
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
}
};
