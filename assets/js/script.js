var currentDayEl = document.getElementById("currentDay");

// show current month and day
currentDayEl.textContent = moment().format("dddd, MMM Do");

// color code time blocks to indicate past, present, or future
var currentHour = moment().hours();

// save tasks to localStorage
$(".saveBtn").on("click", function() {
    // create variables to save tasks and time
    var task = $(this).siblings(".task-description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, task);
})

// retrieve tasks from localStorage
$("#9-00 .task-description").val(localStorage.getItem("9-00"));
$("#10-00 .task-description").val(localStorage.getItem("10-00"));
$("#11-00 .task-description").val(localStorage.getItem("11-00"));
$("#12-00 .task-description").val(localStorage.getItem("12-00"));
$("#13-00 .task-description").val(localStorage.getItem("13-00"));
$("#14-00 .task-description").val(localStorage.getItem("14-00"));
$("#15-00 .task-description").val(localStorage.getItem("15-00"));
$("#16-00 .task-description").val(localStorage.getItem("16-00"));
$("#17-00 .task-description").val(localStorage.getItem("17-00"));

function hourTracker() {
    // loop over time blocks
    $(".time-block").each(function () {
        var blockHour = parseInt($(this)
            .attr("id")
            .split("-"));

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