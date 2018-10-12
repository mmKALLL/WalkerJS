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
  wjs.messageBox = {
    elem: document.getElementById("message-box"),
    companionElem: document.getElementById("companion-message-box"),
    push: function(string) {
      this.elem.innerHTML = "<span class='message message-fadeout'>" + string + "</span><br>" + this.elem.innerHTML;
    },
    pushImportant: function(string) {
      this.elem.innerHTML = "<span class='message message-important'>" + string + "</span><br>" + this.elem.innerHTML;
    },
    pushDebug: function(string) { if (wjs.constants.DEBUG) messageBox.pushMessage(string); },
    pushCompanion: function(string) {
      this.companionElem.innerHTML = "<span class='message message-fadeout'>" + string + "</span><br>" + this.companionElem.innerHTML;
    },
  };
})();