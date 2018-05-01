# Walker - Path to Darkness

A simple game about a man and a road. Deeper than one may think.

Made as an exercise using vanilla JavaScript, because why not. Currently in very early stages of explorative development, but there will be more to come.

For testing, can be tried out at https://mmkalll.github.io/walker-js/

/* *****************************************************************************************\  
** Walker - Path to Darkness  
** A game about walking the long road of life.  
** Author: Esa Koskinen (mmKALLL)  
**  
** NOT FOR REDISTRIBUTION OF ANY KIND. ALL RIGHTS RESERVED.  
** (c) 2017-2018 Esa Koskinen  
\\\* *****************************************************************************************/  


## Roadmap
```
// DONE: Add filtering of debug messages based on constant.
// DONE: Remove temporary layout elements.
// FIXME: Prefix things with "wjs" namespace and move event handlers & constants/player/gamestate to separate files.

// DONE: Experiment with different UI layouts and check responsiveness of having things of different sizes.
// TODO: Adjust button/div widths and margins based on screen width and height.
// DONE: Implement the basic controls and layout. (3 columns)
// TODO: Use css-grid for handling complex layout.
// TODO: Center button div on smaller viewports.

// TODO: Add timer system for action cooldown, with button-background adjust.
// TODO: Debug the player's movement.
// TODO: Figure out a way to calculate totalSteps without function call parentheses.
// TODO: Add message div max size and disappearing messages, fadeout near bottom, message text color param.
// TODO: Add text bunching ("Took step! (x19)" -> "Took step! (x20)" when same message is repeated.)

// TODO: Saving and loading from localstorage. Handle in separate thread which calls message function when done.
// TODO: Load game button on title screen when saved data exists (use spinner if checking localstorage takes long).
// TODO: Implement the upgrade system (step back/forward, look back, look forward).
// TODO: Implement the energy system (running and walking cost energy, food/breaks/sleep restore it).
// TODO: Keep track of player inventory.
// TODO: Keep track of position, place items on map.
// TODO: Implement the trading system.
// TODO: Implement houses, towns, cities, and the Capital, as well as merchants and other random encounters.
// TODO: Implement footer - links, source, social media, feedback to dev, etc.

// TODO: Cutscenes. Fade out .gameplay, fade in/out text that floats up or down.
// TODO: Control mood within cutscenes.
// TODO: Day system and victory/loss conditions. At start of day, inform that game is saved, fade back after button click.
// TODO: Add some interesting messages and world events.
// TODO: Implement The Friend.
// TODO: Implement a pause button, and pause game during cutscenes.
// TODO: Implement endings.

// DONE: Use custom domain with GitHub Pages. ( walkergame.com )
// EXTEND: Export/import saves as strings.
// EXTEND: Full screen button.
// EXTEND: Fade out buttons on cutscene/return to title.
// EXTEND: Fade bg back to white when returning to the title screen.
// EXTEND: Possible to navigate and use with keyboard only.
```
