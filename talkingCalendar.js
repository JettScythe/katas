const talkingCalendar = function(date) {
  let reformat = date.split("/");
  let year = reformat[0];
  let month = reformat[1];
  let day = reformat[2].replace(/^0+(?!\.|$)/, '');
  switch (month) {
  case "08":
    month = "August";
    break;
  case "11":
    month = "November";
    break;
  case "12":
    month = "December";
    break;
  }
  if (day.charAt(day.length - 1) == "2") {
    day += "nd";
  } else {
    day += "th";
  }
  let newStr = month + " " + day + ", " + year;
  return newStr;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));