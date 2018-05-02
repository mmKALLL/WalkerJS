"use strict";

/* ********************************************************\
* Walker - Path to Darkness
* A game about walking the long road of life.
* Author: Esa Koskinen (mmKALLL)
*
* NOT FOR REDISTRIBUTION OF ANY KIND. ALL RIGHTS RESERVED.
* Copyright (c) 2017-2018 Esa Koskinen
* ********************************************************/
var wjs = wjs || {};

(function () {

<<<<<<< HEAD
  var constants = {
    DEBUG: true,
    TEXT_COLOR_SWITCH_THRESHOLD: 137, // Text color based on HSP space Perceived Brightness
  };

=======
>>>>>>> Separated constants to their own file, fixing indentation.
  var player = {
    forwardSteps: 0,
    backwardSteps: 0,
    get totalSteps() { return this.forwardSteps + this.backwardSteps; },
    get position() { return this.forwardSteps - this.backwardSteps; },

    mood: 20, /* 0 to 155; individual moods 0 if mood < 100, then from 0 to 100 */
    moodRed: 0,   // represents passion, love, bonds
    moodGreen: 0, // represents optimism, wellbeing, altruism
    moodBlue: 0,  // represents rationality, thinking, calmness
    get moodColorR() { return player.mood + player.moodRed; },
    get moodColorG() { return player.mood + player.moodGreen; },
    get moodColorB() { return player.mood + player.moodBlue; },
    get moodColor() { return rgb(player.moodColorR, player.moodColorG, player.moodColorB); },
    get moodTextColor() {
      if (constants.TEXT_COLOR_SWITCH_THRESHOLD >
<<<<<<< HEAD
        colorBrightness(player.moodColorR, player.moodColorG, player.moodColorB)) {
          return "white";
        } else {
          return "black";
        }
      },

      stepForward: function() {
        player.forwardSteps += 1;
        if (player.totalSteps <= 1)
        messageBox.pushDebug("You have taken your first step!");
        else messageBox.pushDebug("You have taken a step " + player.totalSteps + " times!");
        updateStatus();
      },

      stepBackward: function() {
        player.backwardSteps += 1;
        if (player.backwardSteps <= 1)
=======
          colorBrightness(player.moodColorR, player.moodColorG, player.moodColorB)) {
        return "white";
      } else {
        return "black";
      }
    },

    stepForward: function() {
      player.forwardSteps += 1;
      if (player.totalSteps <= 1)
      messageBox.pushDebug("You have taken your first step!");
      else messageBox.pushDebug("You have taken a step " + player.totalSteps + " times!");
      updateStatus();
    },

    stepBackward: function() {
      player.backwardSteps += 1;
      if (player.backwardSteps <= 1)
>>>>>>> Separated constants to their own file, fixing indentation.
        messageBox.pushDebug("You took a step back!");
      else
        messageBox.pushDebug("You have taken a step back " + player.backwardSteps + " times!");
<<<<<<< HEAD
        updateStatus();
      },

      // Calling with just amount param adjusts base mood. Color assumed to be a string, one of "n" (neutral), "r", "g" or "b".
      changeMood: function(amount, colorLetter) {
        var color = colorLetter ? colorLetter.toString().toLowerCase() : "n";
        if (color === "r") {
          player.moodRed += amount;
          player.moodRed = Math.min(100, Math.max(player.moodRed, 0));
          messageBox.pushDebug("Changed moodRed by " + amount);
        } else if (color === "g") {
          player.moodGreen += amount;
          player.moodGreen = Math.min(100, Math.max(player.moodGreen, 0));
          messageBox.pushDebug("Changed moodGreen by " + amount);
        } else if (color === "b") {
          player.moodBlue += amount;
          player.moodBlue = Math.min(100, Math.max(player.moodBlue, 0));
          messageBox.pushDebug("Changed moodBlue by " + amount);
        } else {
          player.mood += amount;
          player.mood = Math.min(155, Math.max(player.mood, 0));
          messageBox.pushDebug("Changed mood by " + amount);
        }
        updateStatus();
        updateMoodEffects();
      },
=======
      updateStatus();
    },

    // Calling with just amount param adjusts base mood. Color assumed to be a string, one of "n" (neutral), "r", "g" or"b".
    changeMood: function(amount, colorLetter) {
      var color = colorLetter ? colorLetter.toString().toLowerCase() : "n";
      if (color === "r") {
        player.moodRed += amount;
        player.moodRed = Math.min(100, Math.max(player.moodRed, 0));
        messageBox.pushDebug("Changed moodRed by " + amount);
      } else if (color === "g") {
        player.moodGreen += amount;
        player.moodGreen = Math.min(100, Math.max(player.moodGreen, 0));
        messageBox.pushDebug("Changed moodGreen by " + amount);
      } else if (color === "b") {
        player.moodBlue += amount;
        player.moodBlue = Math.min(100, Math.max(player.moodBlue, 0));
        messageBox.pushDebug("Changed moodBlue by " + amount);
      } else {
        player.mood += amount;
        player.mood = Math.min(155, Math.max(player.mood, 0));
        messageBox.pushDebug("Changed mood by " + amount);
      }
      updateStatus();
      updateMoodEffects();
    },
>>>>>>> Separated constants to their own file, fixing indentation.

      changeMoodFunc: function(amount, color) {
        return function(event) {
          console.log(event);
          if (event.target.classList.contains("inactive")) {
            console.log("Inactive button clicked.");
          } else {
            player.changeMood(amount, color);
          }
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

    var messageBox = {
      elem: document.getElementById("messageBox"),
      pushMessage: function(string) {
        this.elem.innerHTML = "<span class='message message-fadeout'>" + string + "</span><br>" + this.elem.innerHTML;
      },
      pushImportant: function(string) {
        this.elem.innerHTML = "<span class='message message-important'>" + string + "</span><br>" + this.elem.innerHTML;
      },
      pushDebug: function(string) { if (constants.DEBUG) messageBox.pushMessage(string); },
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

      document.getElementById("screen").style.display = "none";

      document.getElementById("stepForwardButton").addEventListener("click", player.stepForward);
      document.getElementById("stepBackwardButton").addEventListener("click", player.stepBackward);

      document.getElementById("increaseMoodButton").addEventListener("click", player.changeMoodFunc(30));
      document.getElementById("increaseMoodButtonR").addEventListener("click", player.changeMoodFunc(30, "r"));
      document.getElementById("increaseMoodButtonG").addEventListener("click", player.changeMoodFunc(30, "g"));
      document.getElementById("increaseMoodButtonB").addEventListener("click", player.changeMoodFunc(30, "b"));

      document.getElementById("decreaseMoodButton").addEventListener("click", player.changeMoodFunc(-30));
      document.getElementById("decreaseMoodButtonR").addEventListener("click", player.changeMoodFunc(-30, "r"));
      document.getElementById("decreaseMoodButtonG").addEventListener("click", player.changeMoodFunc(-30, "g"));
      document.getElementById("decreaseMoodButtonB").addEventListener("click", player.changeMoodFunc(-30, "b"));

      document.getElementById("titleReturnButton").addEventListener("click", function() {
        window.location.replace("./index.html");
      });

      var elem = document.documentElement;
      elem.style.setProperty("--mood-background-color", "white");
      elem.style.setProperty("--mood-text-color", "black");

      updateStatus();
      window.setTimeout(updateMoodEffects, 100); // Allow background transition using timeout.
    }

    startNewGame();

  })();
