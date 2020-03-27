/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
function getCurrentEvents(){
  $.get("/api/events", (response) => {
    // console.log(response);
    response.forEach(obj => {
      obj.title = "Active Play Date!";
    });
    // console.log(response);
    $("#calendar").fullCalendar({
      events: response,
      selectable: false,
      header: {
        left: "prev,next today",
        center: "title",
        // right: 'month'
      },/*
      dayClick: function (date) {
        console.log("clicked" + date.format());
        date = date.format();
        window.location.href = "/day/" + date;
      },
      eventClick: function (calEvent, jsEvent, view) {
        // console.log('clicked ', calEvent);
        console.log(calEvent.start._i);
        let date = calEvent.start._i;

        // date = date.format();
        window.location.href = "/day/" + date;
      }*/
    });
    
  });
}//end of getCurrentEvents

/*function calendarDates() {

} */
$(document).ready(function(){
  if(performance.navigation.type === 2){
    location.reload(true);
  }
  var now = moment().format();
  console.log(`Time is ${now}`);
  // calenderCall();
  getCurrentEvents();
});


