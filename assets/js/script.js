var headerEl = $("#currentDay");
// console.log(headerEl);
var dateEl = $("<p>");
headerEl.append(dateEl);

function today() {
    let dateTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
    console.log(dateTime);
    dateEl.text(dateTime);
}

// var time = moment().format("h:mm");
// setInterval(time, 1000);
// console.log(time);

function currentTime() {
    // console.log("Check is happening");
    let currentTime = moment().hour();
    $(".row").each(function() {
        // console.log(this);
        // console.log($(this).children("textarea").attr("time"));
        let rowTime = $(this).children("textarea").attr("time");
        if(parseInt(rowTime) < currentTime) {
            $(this).children("textarea").addClass("past");
        }
        if(parseInt(rowTime) == currentTime) {
            $(this).children("textarea").addClass("present");
        }
        if(parseInt(rowTime) > currentTime) {
            $(this).children("textarea").addClass("future");
        }
    });
}

function getInput() {
    let timeStore = $(this).attr("id");
    console.log(timeStore);
    let timeInput = $(this).siblings('textarea').val();
    console.log(timeInput);
    localStorage.setItem(timeStore, timeInput);
}

function renderInput() {
    let nineAm = localStorage.getItem("scheduleNine");
    let tenAm = localStorage.getItem("scheduleTen");
    let elevenAm = localStorage.getItem("scheduleEleven");
    let twelvePm = localStorage.getItem("scheduleTwelve");
    let onePm = localStorage.getItem("scheduleOne");
    let twoPm = localStorage.getItem("scheduleTwo");
    let threePm = localStorage.getItem("scheduleThree");
    let fourPm = localStorage.getItem("scheduleFour");
    let fivePm = localStorage.getItem("scheduleFive");

    $("#nine").text(nineAm);
    $("#ten").text(tenAm);
    $("#eleven").text(elevenAm);
    $("#twelve").text(twelvePm);
    $("#one").text(onePm);
    $("#two").text(twoPm);
    $("#three").text(threePm);
    $("#four").text(fourPm);
    $("#five").text(fivePm);
}

$(".saveBtn").on("click", getInput);

today();
currentTime();
renderInput();
setInterval(currentTime, 60000);
setInterval(today, 60000);
