var headerEl = $("#currentDay");
// console.log(headerEl);
var dateEl = $("<p>");
var timeBlock = $(".container");
headerEl.append(dateEl);


var today = function () {
    var dateTime = moment().format("MMMM Do YYYY hh:mm:ss a");
    dateEl.text(dateTime);
}
setInterval(today, 1000);



function getInput() {
    var inputGrab = $("#schedule").val();
    console.log("Input was grabbed: " + inputGrab);
}

timeBlock.on("click", ".btn", getInput);