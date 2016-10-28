/*!
 * SimpleTime v1.0 (http://dylanduff.github.io)
 */

function SimpleTime() {
    var date = new Date();
    var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var monthname = month[date.getMonth()];

var weekday = new Array(7);
weekday[0]=  "SUNDAY";
weekday[1] = "MONDAY";
weekday[2] = "TUESDAY";
weekday[3] = "WEDNESDAY";
weekday[4] = "THURSDAY";
weekday[5] = "FRIDAY";
weekday[6] = "SATURDAY";
var day = weekday[date.getDay()];

var datey = date.getDate();
var year = date.getFullYear();

document.getElementById('monthname').innerHTML = monthname + " " + datey;
document.getElementById('day').innerHTML = day  + "," + " " + year;

}
