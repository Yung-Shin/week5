// Current Date
$(document).ready(function () {
  let currentDate = dayjs().format("dddd, MMM D YYYY  h:mmA"); 
  $("#currentDay").html(currentDate);

// Save Button and local storage saving
$(".saveBtn").on("click", function () {
  let text = $(this).siblings(".description").val();
  let time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
  });

// Tracking present time
function timeTracker() {
  let presentTime = dayjs().format("HH");
  console.log(presentTime);


$(".time-block").each(function () {
  var shceduleHour = parseInt($(this).attr("id").split("hour-")[1]);
  console.log(shceduleHour);

// Background color based on past, present, and future 
    if (shceduleHour < presentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
      } else if (shceduleHour == presentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
      } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
      }
    });
  }

// fetching data from local storage 
$("#hour-09 .description").val(localStorage.getItem("hour-09"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

timeTracker();
});