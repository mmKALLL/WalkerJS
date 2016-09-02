"use strict";

(function() {

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
