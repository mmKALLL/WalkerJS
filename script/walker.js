"use strict";


/********************
 * Walker - a game about walking the long road of life.
 * Author: Esa Koskinen (mmKALLL)
 *
 * NOT FOR REDISTRIBUTION OF ANY KIND. ALL RIGHTS RESERVED.
 ********************/
(function() {

  // TODO: Add timer system for actions.
  // TODO: Debug the player's movement.
  // TODO: Figure out a way to calculate total without a function call parentheses.
  // TODO: Add some interesting messages.

  var player = {
    forwardSteps: 0,
    backwardSteps: 0,
    totalSteps: function() { return this.forwardSteps + this.backwardSteps; },
    position: function() { return this.forwardSteps - this.backwardSteps; },

    stepForward: function() {
      this.forwardSteps += 1;
      this.totalSteps() <= 1 ?
      messagebox.pushMessage("You clicked the button!") :
      messagebox.pushMessage("You clicked the button " + this.totalSteps() + " times!");
    },

    stepBackward: function() {
      this.backwardSteps += 1;
      this.backwardSteps <= 1 ?
      messagebox.pushMessage("You took a step back!") :
      messagebox.pushMessage("You have taken a step back " + this.backwardSteps + " times!");
    },

  };

  var messagebox = {
    elem: document.getElementById("messagebox"),
    pushMessage: function(string) { this.elem.innerHTML = string + "<br>" + this.elem.innerHTML; },
  }

  document.getElementById("stepForwardButton").addEventListener("click", player.stepForward);
  document.getElementById("stepBackwardButton").addEventListener("click", player.stepBackward);

})();
