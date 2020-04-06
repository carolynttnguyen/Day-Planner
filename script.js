/////
// Variavbles
/////
var saveBtn = $("saveBtn");
var currentDate = moment().val
var text;
var hour;

/////
// functions
/////
 $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
 console.log(moment().format("dddd, MMMM Do YYYY"));


$(document).ready(function () {
    colorChange();
});




function colorChange() {
    var realTime = moment().hours();
    console.log("Current time: " + realTime);

    $(".event-input").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        console.log(timeTest);

        if (realTime > timeTest) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (realTime < timeTest) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}



//function to combine new and previous data and update the block
function updateTimeBlocks() {
    var scheduleData = getScheduleData();

};
//function getting any previous data or input 
function getScheduleData() {;
    var scheduleData = localStorage.getItem(currentDate);
    //if there is not previous data, then create new data, calling  createNewData function 
    if (!scheduleData) {
        scheduleData = newScheduleData();
    } return scheduleData;
};

function newScheduleData() {

};

saveBtn.click(function() {
    text = $(this).siblings(".event-input").val();
    console.log(text);
    hour = $(this).siblings(".hour").text();
    console.log(hour);
    localStorage.setItem(hour, JSON.stringify(text));
    
    colorChange ();
    newScheduleData ();
})

