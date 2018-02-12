"use strict";

/* *******************
 * Walker - a game about walking the long road of life.
 * Author: Esa Koskinen (mmKALLL)
 *
 * NOT FOR REDISTRIBUTION OF ANY KIND. ALL RIGHTS RESERVED.
 * *******************/
(function () {

  // TODO: Add timer system for action cooldown.
  // TODO: Debug the player's movement.
  // TODO: Figure out a way to calculate total without a function call parentheses.
  // TODO: Add some interesting messages.

  var player = {
    forwardSteps: 0,
    backwardSteps: 0,
    mood: 20, /* 0 to 155, then individual moods from 0 to 100 */
    moodLove: 0,  // represents Red
    moodHelp: 0,  // represents Green
    moodThink: 0, // represents Blue
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
      else
        messagebox.pushMessage("You have taken a step back " + player.backwardSteps + " times!");
      updateStatus();
    },
    
    changeMood: function(amount) {
      player.mood += amount;
      messagebox.pushMessage("Changed mood by " + amount);
      updateStatus();
      updateMoodEffects();
    },
    
    changeMoodFunc: function(amount) {
      return function() {
        player.changeMood(amount);
      };
    }

  };


  var messagebox = {
    elem: document.getElementById("messageBox"),
    pushMessage: function(string) { this.elem.innerHTML = string + "<br>" + this.elem.innerHTML; },
  };


  function updateStatus() {
    var elem = document.getElementById("statusArea");
    elem.innerHTML =  "You have taken " + player.totalSteps + " steps.<br>" +
                      "Your current position is " + player.position + ".<br>" +
                      "Your current mood is " + player.mood + ".<br>";

  }
  
  function updateMoodEffects() {
    document.documentElement.style.setProperty("--mood-background-color", player.moodColor);
  }

  function startNewGame() {
    document.getElementById("stepForwardButton").addEventListener("click", player.stepForward);
    document.getElementById("stepBackwardButton").addEventListener("click", player.stepBackward);
    document.getElementById("increaseMoodButton").addEventListener("click", player.changeMoodFunc(10));
    document.getElementById("decreaseMoodButton").addEventListener("click", player.changeMoodFunc(-10));
    
    updateStatus();
  }
  
  startNewGame();
  
})();
