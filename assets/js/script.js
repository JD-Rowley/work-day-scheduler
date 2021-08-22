var currentDayEl = document.getElementById("currentDay");

currentDayEl.textContent = moment().format("dddd, MMM Do");

// color code time blocks to indicate past, present, or future
var currentTime = moment();
var currentHour = moment().hour();
