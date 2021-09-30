var headerEl = $("#currentDay");
// console.log(headerEl);
var dateEl = $("<p>");
headerEl.append(dateEl);
// Timer function that displays the current time in what day it is, month, the date, and year along with the current time in hours and minutes
function today() {
    let dateTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
    console.log(dateTime);
    dateEl.text(dateTime);
}


// checks the current hour and compares them to the time blocks and changes color accordingly
function currentTime() {
    // console.log("Check is happening");
    let currentTime = moment().hour();
    // for each loop that targets all of the divs with class row on the page
    $(".row").each(function() {
        // console.log(this);
        // console.log($(this).children("textarea").attr("time"));
        // grabs the value of the attribute time on the textarea elements
        let rowTime = $(this).children("textarea").attr("time");
        // takes the attribute value and turns it to a number then compares it to the current hour to decide what class is being added
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

// grabs the input from the texarea element and puts it into local storage
function getInput() {
    // uses the value of the id on the textarea as a key for storage
    console.log($(this));
    let timeStore = $(this).attr("id");
    console.log(timeStore);
    // grabs the text in the textarea
    let timeInput = $(this).siblings('textarea').val();
    console.log(timeInput);
    localStorage.setItem(timeStore, timeInput);
}

// renders anything in localstorage onto the page into the correct timeblocks
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


//function calls
today();
currentTime();
renderInput();
setInterval(currentTime, 60000);
setInterval(today, 60000);
