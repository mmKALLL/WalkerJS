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

  wjs.player = {
    forwardSteps: 0,
    backwardSteps: 0,
    get totalSteps() { return this.forwardSteps + this.backwardSteps; },
    get position() { return this.forwardSteps - this.backwardSteps; },

    mood: 20, /* 0 to 155; individual moods 0 if mood < 100, then from 0 to 100 */
    moodRed: 0,   // represents passion, love, bonds
    moodGreen: 0, // represents optimism, wellbeing, altruism
    moodBlue: 0,  // represents rationality, thinking, calmness
    get moodColorR() { return wjs.player.mood + wjs.player.moodRed; },
    get moodColorG() { return wjs.player.mood + wjs.player.moodGreen; },
    get moodColorB() { return wjs.player.mood + wjs.player.moodBlue; },
    get moodColor() { return rgb(wjs.player.moodColorR, wjs.player.moodColorG, wjs.player.moodColorB); },
    get moodTextColor() {
      if (wjs.constants.TEXT_COLOR_SWITCH_THRESHOLD >
          colorBrightness(wjs.player.moodColorR, wjs.player.moodColorG, wjs.player.moodColorB)) {
        return "white";
      } else {
        return "black";
      }
    },

    stepForward: function() {
      wjs.player.forwardSteps += 1;
      if (wjs.player.totalSteps <= 1)
      messageBox.pushDebug("You have taken your first step!");
      else messageBox.pushDebug("You have taken a step " + wjs.player.totalSteps + " times!");
      updateStatus();
    },

    stepBackward: function() {
      wjs.player.backwardSteps += 1;
      if (wjs.player.backwardSteps <= 1)
        messageBox.pushDebug("You took a step back!");
      else
        messageBox.pushDebug("You have taken a step back " + wjs.player.backwardSteps + " times!");
      updateStatus();
    },

    // Calling with just amount param adjusts base mood. Color assumed to be a string, one of "n" (neutral), "r", "g" or"b".
    changeMood: function(amount, colorLetter) {
      var color = colorLetter ? colorLetter.toString().toLowerCase() : "n";
      if (color === "r") {
        wjs.player.moodRed += amount;
        wjs.player.moodRed = Math.min(100, Math.max(wjs.player.moodRed, 0));
        messageBox.pushDebug("Changed moodRed by " + amount);
      } else if (color === "g") {
        wjs.player.moodGreen += amount;
        wjs.player.moodGreen = Math.min(100, Math.max(wjs.player.moodGreen, 0));
        messageBox.pushDebug("Changed moodGreen by " + amount);
      } else if (color === "b") {
        wjs.player.moodBlue += amount;
        wjs.player.moodBlue = Math.min(100, Math.max(wjs.player.moodBlue, 0));
        messageBox.pushDebug("Changed moodBlue by " + amount);
      } else {
        wjs.player.mood += amount;
        wjs.player.mood = Math.min(155, Math.max(wjs.player.mood, 0));
        messageBox.pushDebug("Changed mood by " + amount);
      }
      updateStatus();
      updateMoodEffects();
    },

    changeMoodFunc: function(amount, color) {
      return function(event) {
        console.log(event);
        if (event.target.classList.contains("inactive")) {
          console.log("Inactive button clicked.");
        } else {
          wjs.player.changeMood(amount, color);
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
    pushDebug: function(string) { if (wjs.constants.DEBUG) messageBox.pushMessage(string); },
  };


  function updateStatus() {
    var elem = document.getElementById("statusArea");
    elem.innerHTML =  "You have taken " + wjs.player.totalSteps + " steps.<br>" +
    "Your current position is " + wjs.player.position + ".<br>" +
    "Your current mood is " + wjs.player.mood + ".<br>";
  }

  function updateMoodEffects() {
    var elem = document.documentElement;
    elem.style.setProperty("--mood-background-color", wjs.player.moodColor);
    elem.style.setProperty("--mood-text-color", wjs.player.moodTextColor);
  }

  function startNewGame() {
    wjs.events.addEventListeners();

    var elem = document.documentElement;
    elem.style.setProperty("--mood-background-color", "white");
    elem.style.setProperty("--mood-text-color", "black");

    updateStatus();
    window.setTimeout(updateMoodEffects, 150); // Allow background transition using timeout.
  }


  // Returns true if adding to images object was a success, false otherwise.
  function loadImage(filename) {
    if (!images[filename.slice(0, -4)]) {
      var img = new Image();
      img.ready = false;
      img.onload = function () { img.ready = true; };
      img.src = IMAGE_PATH + filename;
      images[filename.slice(0, -4)] = img;
      return true;
    } else {
      return false;
    }
  }

  // Returns true if adding to sounds object was a success, false otherwise.
  function loadSound(filename) {
    if (!sounds[filename.slice(0, -4)]) {
      var snd = new Audio(SOUND_PATH + filename);
      snd.ready = false;
      snd.addEventListener("canplaythrough", function () { snd.ready = true; });
      snd.volume = gameStatus.sfxVolume;
      sounds[filename.slice(0, -4)] = snd;
      return true;
    } else {
      return false;
    }
  }

  function changeSfxVolume(newVolume) {
    gameStatus.sfxVolume = newVolume;
    for (key in sounds) {
      sounds[key].volume = newVolume;
    }
  }

  function checkAssetLoad() {
    console.log(wjs);
    if (
        wjs
        && wjs.core       // Launcher, helper functions, etc.
        && wjs.constants  //
        && wjs.player     // Main character mega-object
        && wjs.events     // Event handling for buttons, etc.
        && wjs.messageBox //
        && wjs.strings    // In-game text, with some translation support.
        // TODO: Check that image and sound assets are loaded.
    ) {
      window.clearInterval(intervalID);
      startNewGame();
    } else {

    }
  }

  var intervalID = window.setInterval(checkAssetLoad, 50);

})();
