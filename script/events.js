"use strict";

/* ********************************************************\
* Walker - Path to Darkness
* A game about walking the long road of life.
* Author: Esa Koskinen (mmKALLL)
*
* NOT FOR REDISTRIBUTION OF ANY KIND. ALL RIGHTS RESERVED.
* Copyright (c) 2017-2018 Esa Koskinen
* ********************************************************/
window.wjs = window.wjs || {};

(function () {
  wjs.events = {
    addEventListeners : function() {
      document.getElementById("step-forward-button").addEventListener("click", wjs.player.stepForward);
      document.getElementById("step-backward-button").addEventListener("click", wjs.player.stepBackward);

      document.getElementById("increase-mood-button").addEventListener("click", wjs.player.changeMoodFunc(52));
      document.getElementById("increase-mood-buttonR").addEventListener("click", wjs.player.changeMoodFunc(50, "r"));
      document.getElementById("increase-mood-buttonG").addEventListener("click", wjs.player.changeMoodFunc(50, "g"));
      document.getElementById("increase-mood-buttonB").addEventListener("click", wjs.player.changeMoodFunc(50, "b"));

      document.getElementById("decrease-mood-button").addEventListener("click", wjs.player.changeMoodFunc(-50));
      document.getElementById("decrease-mood-buttonR").addEventListener("click", wjs.player.changeMoodFunc(-50, "r"));
      document.getElementById("decrease-mood-buttonG").addEventListener("click", wjs.player.changeMoodFunc(-50, "g"));
      document.getElementById("decrease-mood-buttonB").addEventListener("click", wjs.player.changeMoodFunc(-50, "b"));

      document.getElementById("title-return-button").addEventListener("click", function() {
        window.location.replace("./index.html");
      });
    }
  };
})();