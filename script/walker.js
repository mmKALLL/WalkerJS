"use strict";


/* *******************
 * Walker - a game about walking the long road of life.
 * Author: Esa Koskinen (mmKALLL)
 *
 * NOT FOR REDISTRIBUTION OF ANY KIND. ALL RIGHTS RESERVED.
 * *******************/
(function () {

  // TODO: Add timer system for actions.
  // TODO: Debug the player's movement.
  // TODO: Figure out a way to calculate total without a function call parentheses.
  // TODO: Add some interesting messages.

  var player = {
    forwardSteps: 0,
    backwardSteps: 0,
    get totalSteps() { return this.forwardSteps + this.backwardSteps; },
    get position() { return this.forwardSteps - this.backwardSteps; },

    stepForward: function() {
      player.forwardSteps += 1;
      if (player.totalSteps <= 1)
        messagebox.pushMessage("You have taken your first step!");
      else messagebox.pushMessage("You have taken a step " + player.totalSteps + " times!");
      updateStatus();
    },

    stepBackward: function() {
      player.backwardSteps += 1;
      if (player.backwardSteps <= 1)
        messagebox.pushMessage("You took a step back!");
      else messagebox.pushMessage("You have taken a step back " + player.backwardSteps + " times!");
      updateStatus();
    },

  };


  var messagebox = {
    elem: document.getElementById("messageBox"),
    pushMessage: function(string) { this.elem.innerHTML = string + "<br>" + this.elem.innerHTML; },
  };


  function updateStatus() {
    var elem = document.getElementById("statusArea");
    elem.innerHTML =  "You have taken " + player.totalSteps + " steps.<br>" +
                      "Your current position is " + player.position + ".<br>";

  }

  updateStatus();
  
  document.getElementById("stepForwardButton").addEventListener("click", player.stepForward);
  document.getElementById("stepBackwardButton").addEventListener("click", player.stepBackward);

})();
