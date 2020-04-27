angular.module('todoApp',[])
.controller('TodoListController',
function(){
    var todoList = this;
    todoList.todos=[
        {text:'Hello I am RJT',done:true},
        {text:'lets work....',done:false}];
        
        todoList.addTodo=function(){
            todoList.todos.push({text:todoList.todoText,done:false});
            todoList.todoText='';
        };
        todoList.remaining=function(){
            var count = 0;
            angular.forEach(todoList.todos,function(todo){
                count += todo.done ? 0 : 1 ;
            });
            return count;
        };
        todoList.archive= function(){
            var oldTodos = todoList.todos;
            todoList.todos=[];
            angular.forEach(oldTodos,function(todo){
                if(!todo.done)todoList.todos.push(todo);
            });
        };
});
function Function1(a){
    document.getElementById('Headline').innerHTML='Topic 1';
}
function Function2(b){
    document.getElementById('Headline').innerHTML='Topic 2';
}
function Function3(c){
    document.getElementById('Headline').innerHTML='Topic 3';
}
function Function4(d){
    document.getElementById('Headline').innerHTML='<input class="input-group input-group-sm" id="NewList" type="text" value="New List"></input><input class="btn btn-primary btn-sm" id="NewList1" type="submit" value="Submit">';
}
function Function5(e){
    document.getElementById("Date").innerHTML=Date();
}