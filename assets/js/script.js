var currentDayEl = document.getElementById("currentDay");

currentDayEl.textContent = moment().format("dddd, MMM Do");

// color code time blocks to indicate past, present, or future
var time = moment();

if (time.isAfter(9)) {
    $("9:00:00").addClass("past");
}