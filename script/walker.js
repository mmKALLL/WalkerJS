"use strict";

(function() {

  var player = {
    forwardSteps: 0,
    backwardSteps: 0,
    totalSteps: function() { return this.forwardSteps + this.backwardSteps; },
  };


  document.getElementById("testbutton").addEventListener("click", function(){
    player.forwardSteps += 1;
    player.totalSteps() < 2 ?
    document.getElementById("div").innerHTML += "<br>You clicked the button!" :
    document.getElementById("div").innerHTML += "<br>You clicked the button " + player.totalSteps() +
                                                " times!";
  });

  function playerTakeStep() {


  }



})();
