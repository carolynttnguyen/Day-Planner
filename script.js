var text;
var hour;


$(document).ready(function () {
    getCurrentDate();
    colorChange();
});

function getCurrentDate() {
    $("#current-day").text(moment().format("dddd, MMMM Do YYYY"));
    console.log(moment().format("dddd, MMMM Do YYYY"));
};

function colorChange() {
    var realhour = moment().hours();
    console.log("Current hour: " + realhour);

    $(".event-input").each(function () {
        var hourTest = parseInt($(this).attr("id"));
        console.log(hourTest);

        if (realhour === hourTest) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        } else if (realhour > hourTest) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else {

            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    });
}

//returns an array with object
// representing the data that is being tracked about each time block in the schedule
function newScheduleData() {
    return [
        { hour: 9, text: "" },
        { hour: 10, text: "" },
        { hour: 11, text: "" },
        { hour: 12, text: "" },
        { hour: 13, text: "" },
        { hour: 14, text: "" },
        { hour: 15, text: "" },
        { hour: 16, text: "" },
        { hour: 17, text: "" },
    ]
};

//when we dont have any data in local storage we call this function newScheduleData
//to give us a fresh copy to use
function getScheduleData() {
    var currentDate = getCurrentDate();
    var scheduleData =  savedSheduleData();
    if (!scheduleData) {
        scheduleData = newScheduleData();
    } return scheduleData;
}

function savedSheduleData() {
    //load any saved data from LocalStorage - do this for each hour created.
    $("#9.event-input").val(localStorage.getItem("9"));
    $("#10.event-input").val(localStorage.getItem("10"));
    $("#11.event-input").val(localStorage.getItem("11"));
    $("#12.event-input").val(localStorage.getItem("12"));
    $("#13.event-input").val(localStorage.getItem("13"));
    $("#14.event-input").val(localStorage.getItem("14"));
    $("#15.event-input").val(localStorage.getItem("h15"));
    $("#16.event-input").val(localStorage.getItem("16"));
    $("#17.event-input").val(localStorage.getItem("17"));
};


$("saveBtn").click(function () {
    text = $(this).siblings(".event-input").val();
    console.log(text);
    hour = $(this).siblings(".hour").text();
    console.log(hour);
    localStorage.setItem(hour, JSON.stringify(text));
});