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
      document.getElementById("stepForwardButton").addEventListener("click", player.stepForward);
      document.getElementById("stepBackwardButton").addEventListener("click", player.stepBackward);

      document.getElementById("increaseMoodButton").addEventListener("click", player.changeMoodFunc(52));
      document.getElementById("increaseMoodButtonR").addEventListener("click", player.changeMoodFunc(50, "r"));
      document.getElementById("increaseMoodButtonG").addEventListener("click", player.changeMoodFunc(50, "g"));
      document.getElementById("increaseMoodButtonB").addEventListener("click", player.changeMoodFunc(50, "b"));

      document.getElementById("decreaseMoodButton").addEventListener("click", player.changeMoodFunc(-50));
      document.getElementById("decreaseMoodButtonR").addEventListener("click", player.changeMoodFunc(-50, "r"));
      document.getElementById("decreaseMoodButtonG").addEventListener("click", player.changeMoodFunc(-50, "g"));
      document.getElementById("decreaseMoodButtonB").addEventListener("click", player.changeMoodFunc(-50, "b"));

      document.getElementById("titleReturnButton").addEventListener("click", function() {
        window.location.replace("./index.html");
      });
    }
  };
})();