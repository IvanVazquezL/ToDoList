module.exports.getDate = getDate;

function getDate(){
  var today = new Date();
  var options =
  {
    weekday : "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }
  var dayWeek = today.toLocaleString("en-US", options);

  return dayWeek;

}

module.exports.getDay = getDay;

function getDay(){
  var today = new Date();
  var options =
  {
    weekday : "long",
  }
  var dayWeek = today.toLocaleString("en-US", options);

  return dayWeek;

}
