var currentDayEl = document.getElementById("currentDay");

// show current month and day
currentDayEl.textContent = moment().format("dddd, MMM Do");

// color code time blocks to indicate past, present, or future
var currentHour = moment().hour();

// save tasks to localStorage
$(".saveBtn").on("click", function() {
    // create variables to save tasks and time
    var task = $(".task-description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, task);
})

// retrieve tasks from localStorage
$("#9am .task-description").val(localStorage.getItem("9am"));
$("#10am .task-description").val(localStorage.getItem("10am"));
$("#11am .task-description").val(localStorage.getItem("11am"));
$("#12pm .task-description").val(localStorage.getItem("12pm"));
$("#1pm .task-description").val(localStorage.getItem("1pm"));
$("#2pm .task-description").val(localStorage.getItem("2pm"));
$("#3pm .task-description").val(localStorage.getItem("3pm"));
$("#4pm .task-description").val(localStorage.getItem("4pm"));
$("#5pm .task-description").val(localStorage.getItem("5pm"));

function hourTracker() {
    // loop over time blocks
    $(".time-block").each(function () {
        var blockHour = parseInt($(this)
            .attr("id")
            .split("hour", 1));
        console.log(blockHour, currentHour);

        // check current time against given time blocks
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        } else if (blockHour === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        } else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    })
};

hourTracker();