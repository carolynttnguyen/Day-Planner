var currentTime = moment().format("HH");
var currentTimeInt = parseInt(currentTime);
var saveBtn = $("saveBtn");


//set data att to each hour element
$("#nine-row").attr("data-time", moment("9:00am" , "h:mm a").format("HH"));
$("#ten-row").attr("data-time", moment("10:00am" , "h:mm a").format("HH"));
$("#eleven-row").attr("data-time", moment("11:00am" , "h:mm a").format("HH"));
$("#twelve-row").attr("data-time", moment("12:00am" , "h:mm a").format("HH"));
$("#one-row").attr("data-time", moment("1:00am" , "h:mm a").format("HH"));
$("#two-row").attr("data-time", moment("2:00am" , "h:mm a").format("HH"));
$("#three-row").attr("data-time", moment("3:00am" , "h:mm a").format("HH"));
$("#four-row").attr("data-time", moment("4:00am" , "h:mm a").format("HH"));
$("#five-row").attr("data-time", moment("5:00am" , "h:mm a").format("HH"));

$(document).ready(function () {
    setup()
});

//ADD CURRENT DATE TO TOP OF PAGE
function setup() {
    displayCurrentDate();
    //    updateTimeBlocks();

};

//function to display current date
function displayCurrentDate() {
    var currentDate = getCurrentDate();
    $("#display-current-date").text(currentDate);
};

//function to get current date
function getCurrentDate() {
    var date = moment().format("dddd, MMMM Do");
    return date;
};


//function to combine new and previous data and update the block
function updateTimeBlocks() {
    var scheduleData = getScheduleData()

};

//function getting any previous data or input 
function getScheduleData() {
    var currentDate = getCurrentDate();
    var scheduleData = localStorage.getItem(currentDate);
    if (!scheduleData) {
        scheduleData = createNewSchData();
    } return scheduleData;
};


//CHANGING INPUT BOX COLOR BASED ON TIME OF DAY

function boxColor() {
    //set a variable input time to represent the input block's corresponding time with a for loopp
    for ( var i = 1; i <=12; i++) {
        var inputTime = $("#" + i + "Row").attr("data-time");
        var inputTimeInt = parseInt(inputTime);
        console.log (inputTimeInt);

        if (inputTimeInt === currentTimeInt ) {
            $("#" + i + "Row").addClass("present");
        }
        else if (inputTimeInt > currentTimeInt) {
            $("#" + i + "Row").addClass("past");
        }
        else (inputTimeInt < currentTimeInt) {
            $("#" + i + "Row").addClass("future");
        }
    }
};


//BUTTON HOVER
saveBtn.on("mouseenter", function () {
    $(this).addClass('hover');
});

saveBtn.on("mouseleaves", function () {
    $(this).renoveClass('hover');
});

//function for save button
saveBtn.on("click", function () {
    var hour = $(this).attr("data-hour");

    var plan = $("#" + hour + "Row").val();

    localStorage.setItem(time, text);

});