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

  var constants = {
    TEXT_COLOR_SWITCH_THRESHOLD: 137, // Color text based on HSP space Perceived Brightness
  };

  var player = {
    forwardSteps: 0,
    backwardSteps: 0,
    get totalSteps() { return this.forwardSteps + this.backwardSteps; },
    get position() { return this.forwardSteps - this.backwardSteps; },
    
    mood: 20, /* 0 to 155, then individual moods from 0 to 100 */
    moodRed: 0,   // represents passion, love, bonds
    moodGreen: 0, // represents optimism, wellbeing, altruism
    moodBlue: 0,  // represents rationality, thinking, calmness
    get moodColorR() { return player.mood + player.moodRed; },
    get moodColorG() { return player.mood + player.moodGreen; },
    get moodColorB() { return player.mood + player.moodBlue; },
    get moodColor() { return rgb(player.moodColorR, player.moodColorG, player.moodColorB); },
    get moodTextColor() {
      if (constants.TEXT_COLOR_SWITCH_THRESHOLD >
          (player.moodColorR) ) {
        return "white";
      } else {
        return "black";
      }
    },

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

  // Returns a CSS parseable RGB color.
  function rgb(r, g, b){
    r = Math.floor(r);
    g = Math.floor(g);
    b = Math.floor(b);
    return ["rgb(", r, ",", g, ",", b, ")"].join("");
  }
  
  // Return brightness of color in the HSP space; range 0-255.
  // http://alienryderflex.com/hsp.html
  function colorBrightness(r, g, b) {
    return Math.sqrt(0.299 * r * r + 0.587 * g * g + 0.114 * b * b);
  }

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
    var elem = document.documentElement;
    elem.style.setProperty("--mood-background-color", player.moodColor);
    elem.style.setProperty("--mood-text-color", player.moodTextColor);
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
