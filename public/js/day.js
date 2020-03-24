/* eslint-disable prettier/prettier */
"use strict";

const currentDate = (window.location.href).split("/day/").slice(-1).toString().replace(/[#]/g, "");
console.log(currentDate);
const myUserId = parseInt(sessionStorage.getItem("userId"));

function listItemClick(){
  $(".time-link").click(function(){
    // console.log($(this).text());
    let thisParentParent = $(this).parent().parent();
    let time = $(this).data("time-name");
    let parkId = thisParentParent.data("park-id");
    let parkName = thisParentParent.data("park-name");
    let eventObj = {
      time: time,
      parkId: parkId,
      date: currentDate,
      parkName: parkName
    };
    sessionStorage.setItem("eventObj", JSON.stringify(eventObj));
    document.location.href = "/event/day/" + currentDate + "/" + time + "/" + parkId;
    // console.log(eventObj);
  });
}//end of list item click

function getTodaysEvents(){
  let route = "/api/event/current/";
  route += currentDate;
  $.get(route).then(data => {
    console.log("Todays Events");
    console.log(data);
    updateClasses(data);
  });
}//end of getTodaysEvents

//updates classes of list of times based on whether or not there are active events for that day and whether the user is active on one of those days
function updateClasses(data){
  data.forEach((event) => {
    let userId = event.User.id;
    let parkId = event.parkId;
    let time = event.time;

    if (userId === myUserId){
      $(`[data-park-id = ${parkId}] .${time} a`).addClass("userEvent");
    }
    $(`[data-park-id = ${parkId}] .${time} a`).addClass("activeEvent");
  });//end of forEach
}//end of updateClasses

$(document).ready(function(){
  // console.log(window.location.href);
  listItemClick();
  getTodaysEvents();

  // checks to see if the user had entered the page using the back button - if so it refreshes the page to keep active events updated
  if(performance.navigation.type === 2){
    location.reload(true);
  }
});
