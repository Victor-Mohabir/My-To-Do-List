let Do=[];
let userInput;

$('.addNew').click(function() {
    userInput=$(".newToDo").val();
    Do.push(userInput);
    $(".ToDoList").append("<li>"+userInput+"</li>");
    $(".numTasks").text(Do.length);
});

$(".clear").click(function(){
    Do.pop();
    $(".ToDoList").text(Do);
    $(".numTasks").text(Do.length);
});