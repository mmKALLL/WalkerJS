/* ********************************************************\
 * Walker - Path to Darkness
 * A game about walking the long road of life.
 * Author: Esa Koskinen (mmKALLL)
 *
 * NOT FOR REDISTRIBUTION OF ANY KIND. ALL RIGHTS RESERVED.
 * ********************************************************/
(function () {
  function startNewGame() {
    window.location.replace("./walker.html");
  }
  document.getElementById("newGameButton").addEventListener("click", startNewGame);
})();