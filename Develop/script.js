// var tasks = {};

// //add task to div after btn div clicked
// var createTask = function(taskText){
//   //create p element for task text
//   var taskP = $("<p>")
//     .addClass("description")
//     .text(taskText);
// };

//load previously added tasks
var loadTasks = function() {
  for (var i = 9; i <= 17; i++){
    var task = localStorage.getItem(i);
    $("#hour-" + i).val(task);
  }
};
//save added tasks to local storage

//get task info after btn div is clicked
$(".saveBtn").click(function(taskText) {
  var taskText = $(this).siblings("textarea").val();
  var timeBlock = $(this).attr("id").split("-")[1];
  localStorage.setItem(timeBlock, taskText);
  console.log(taskText, timeBlock);
});

loadTasks();