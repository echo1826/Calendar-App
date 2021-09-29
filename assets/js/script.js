var headerEl = $("#currentDay");
// console.log(headerEl);
var dateEl = $("<p>");
headerEl.append(dateEl);

var today = function () {
    var dateTime = moment().format("MMMM Do YYYY hh:mm:ss a");
    dateEl.text(dateTime);
}
setInterval(today, 1000);



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

renderInput();
