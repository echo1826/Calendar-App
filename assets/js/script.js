var headerEl = $(".container");
// console.log(headerEl);
var dateEl = $("<p>");
headerEl.append(dateEl);


var today = function(){
    var dateTime = moment().format("MMMM Do YYYY, hh:mm:ss a");
    dateEl.text(dateTime);
    }
    setInterval(today, 1000);