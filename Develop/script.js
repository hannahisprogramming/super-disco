//load previously added tasks
var loadTasks = function() {
  var currentTime = moment().hours();
  console.log(currentTime);
  for (var i = 9; i <= 17; i++){
    var task = localStorage.getItem(i);
    $("#hour-" + i).val(task);
    if(i < currentTime){
      $("#hour-" + i).addClass("past");
    } else if ( i === currentTime){
      $("#hour-" + i).addClass("present");
    } else {
      $("#hour-" + i).addClass("future");
    }
  }
};

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//get task info after btn div is clicked
$(".saveBtn").click(function(taskText) {
  var taskText = $(this).siblings("textarea").val();
  var timeBlock = $(this).attr("id").split("-")[1];
  localStorage.setItem(timeBlock, taskText);
  console.log(taskText, timeBlock);
});

loadTasks();