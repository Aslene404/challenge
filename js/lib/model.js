
function model(){
       var todo=[{
           task:'',
           status:false

       }];

       function addTodo(item){
           item ? todo.push(item) : null;
       }

       function removeTodo(item){
           var index=todo.indexOf(item);
           index !=-1 ? todo.slice(index,index+1) : null;
       }

       function switchStatus(item){
        var index=todo.indexOf(item);
        index !=-1 ? todo[index].status=!todo[index].status :null;
       }

       function getTodos(){
            return todo;
       }

       return ({
            addItem: addTodo,
            removeItem: removeTodo,
            switchItem: switchStatus,
            getTodos:getTodos
       })
   }



window.model=model();