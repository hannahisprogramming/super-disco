// var tasks = {};

// //add task to div after btn div clicked
// var createTask = function(taskText){
//   //create p element for task text
//   var taskP = $("<p>")
//     .addClass("description")
//     .text(taskText);
// };

// //load previously added tasks
// var loadTasks = function() {
//   tasks = JSON.parse(localStorage.getItem("tasks"));

//   // if nothing in localStorage, create a new object to track all task status arrays
//   if (!tasks) {
//     tasks = {
//       hour9: [],
//       hour10: [],
//       hour11: [],
//       hour12: [],
//       hour1: [],
//       hour2: [],
//       hour3: [],
//       hour4: [],
//       hour5: []
//     };
//   }
// };
//save added tasks to local storage

//get task info after btn div is clicked
$(".saveBtn").click(function(taskText) {
  var taskText = $(this).siblings("textarea").val();
  console.log(taskText);
});