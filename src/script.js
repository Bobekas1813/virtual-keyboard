'use strict'
const keyboardArr = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39];
let display = document.createElement('div');
display.classList.add('display');
document.body.append(display);
let keyboard = document.createElement('div');
keyboard.classList.add('keyboard')
document.body.append(keyboard);

 
let keySymbols = [
  '<div class="keys">`</div>',
  '<div class="keys">1</div>',
  '<div class="keys">2</div>',
  '<div class="keys">3</div>',
  '<div class="keys">4</div>',
  '<div class="keys">5</div>',
  '<div class="keys">6</div>',
  '<div class="keys">7</div>',
  '<div class="keys">8</div>',
  '<div class="keys">9</div>',
  '<div class="keys">0</div>',
  '<div class="keys">-</div>',
  '<div class="keys">=</div>',
  '<div class="backspace">Backspace</div>',
  '<div class="keys">Tab</div>',
  '<div class="keys">Q</div>',
  '<div class="keys">W</div>',
  '<div class="keys">E</div>',
  '<div class="keys">R</div>',
  '<div class="keys">T</div>',
  '<div class="keys">Y</div>',
  '<div class="keys">U</div>',
  '<div class="keys">I</div>',
  '<div class="keys">O</div>',
  '<div class="keys">P</div>',
  '<div class="keys">[</div>',
  '<div class="keys">]</div>',
  '<div class="keys">\\</div>',
  '<div class="keys">DEL</div>',
  '<div class="big-keys">Caps Lock</div>',
  '<div class="keys">A</div>',
  '<div class="keys">S</div>',
  '<div class="keys">D</div>',
  '<div class="keys">F</div>',
  '<div class="keys">G</div>',
  '<div class="keys">H</div>',
  '<div class="keys">J</div>',
  '<div class="keys">K</div>',
  '<div class="keys">L</div>',
  '<div class="keys">;</div>',
  '<div class="keys">\'</div>',
  '<div class="keys">ENTER</div>',
  '<div class="keys">Shift</div>',
  '<div class="keys">Z</div>',
  '<div class="keys">X</div>',
  '<div class="keys">C</div>',
  '<div class="keys">V</div>',
  '<div class="keys">B</div>',
  '<div class="keys">N</div>',
  '<div class="keys">M</div>',
  '<div class="keys">,</div>',
  '<div class="keys">.</div>',
  '<div class="keys">/</div>',
  '<div class="keys">⇑</div>',
  '<div class="big-keys">Shift</div>',
  '<div class="ctrl">Ctrl</div>',
  '<div class="keys">Win</div>',
  '<div class="keys">Alt</div>',
  '<div class="space"></div>',
  '<div class="keys">Alt</div>',
  '<div class="ctrl">Ctrl</div>',
  '<div class="keys">⇐</div>',
  '<div class="keys">⇓</div>',
  '<div class="keys">⇒</div>',

]
console.log(keySymbols.length)

