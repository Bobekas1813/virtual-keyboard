'use strict'
// const keyboardArr = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39];
let display = document.createElement('textarea');
display.classList.add('display');
document.body.append(display);
let keyboard = document.createElement('div');
keyboard.classList.add('keyboard')

let rusKeyboard = [
  '<div num="`" class="keys spec ru">`</div>',
  '<div num="1" class="keys">1</div>',
  '<div num="2" class="keys ru">2</div>',
  '<div num="3" class="keys ru">3</div>',
  '<div num="4" class="keys ru">4</div>',
  '<div num="5" class="keys ru">5</div>',
  '<div num="6" class="keys ru">6</div>',
  '<div num="7" class="keys ru">7</div>',
  '<div num="8" class="keys ru">8</div>',
  '<div num="9" class="keys ru">9</div>',
  '<div num="0" class="keys ru">0</div>',
  '<div num="-" class="keys ru">-</div>',
  '<div num="=" class="keys ru">=</div>',
  '<div class="keys backspace spec ru">Backspace</div>',
  '<div class="keys tab spec ru">Tab</div>',
  '<div data="й" datacaps="Й" class="keys ru">й</div>',
  '<div data="ц" datacaps="Ц" class="keys ru">ц</div>',
  '<div data="у" datacaps="У" class="keys ru">у</div>',
  '<div data="к" datacaps="К" class="keys ru">к</div>',
  '<div data="е" datacaps="Е" class="keys ru">е</div>',
  '<div data="н" datacaps="Н" class="keys ru">н</div>',
  '<div data="г" datacaps="Г" class="keys ru">г</div>',
  '<div data="ш" datacaps="Ш" class="keys ru">ш</div>',
  '<div data="щ" datacaps="Щ" class="keys ru">щ</div>',
  '<div data="з" datacaps="З" class="keys ru">з</div>',
  '<div data="х" datacaps="Х" class="keys ru">х</div>',
  '<div data="ъ" datacaps="Ъ" class="keys ru">ъ</div>',
  '<div symb="\\" class="keys ru">\\</div>',
  '<div class="keys spec ru">DEL</div>',
  '<div class="keys big-keys caps ru spec">Caps Lock</div>',
  '<div data="ф" datacaps="Ф" class="keys ru">ф</div>',
  '<div data="ы" datacaps="Ы" class="keys ru">ы</div>',
  '<div data="в" datacaps="В" class="keys ru">в</div>',
  '<div data="а" datacaps="А" class="keys ru">а</div>',
  '<div data="п" datacaps="П" class="keys ru">п</div>',
  '<div data="р" datacaps="Р" class="keys ru">р</div>',
  '<div data="о" datacaps="О" class="keys ru">о</div>',
  '<div data="л" datacaps="Л" class="keys ru">л</div>',
  '<div data="д" datacaps="Д" class="keys ru">д</div>',
  '<div data="ж" datacaps="Ж" class="keys ru">ж</div>',
  '<div data="э" datacaps="Э" class="keys ru">э</div>',
  '<div class="keys enter spec ru">ENTER</div>',
  '<div class="keys shift big-keys spec ru">Shift</div>',
  '<div data="я" datacaps="Z" class="keys ru">я</div>',
  '<div data="ч" datacaps="Ч" class="keys ru">ч</div>',
  '<div data="с" datacaps="С" class="keys ru">с</div>',
  '<div data="м" datacaps="М" class="keys ru">м</div>',
  '<div data="и" datacaps="И" class="keys ru">и</div>',
  '<div data="т" datacaps="Т" class="keys ru">т</div>',
  '<div data="ь" datacaps="Ь" class="keys ru">ь</div>',
  '<div data="Б" datacaps="Б" class="keys ru">б</div>',
  '<div data="ю" datacaps="Ю" class="keys ru">ю</div>',
  '<div symb="/" class="keys ru">.</div>',
  '<div class="keys spec ru">⇑</div>',
  '<div class="keys shift big-keys right spec ru">Shift</div>',
  '<div class="keys ctrl left spec ru">Ctrl</div>',
  '<div class="keys spec ru">Win</div>',
  '<div class="keys spec ru">Alt</div>',
  '<div class="keys space ru"></div>',
  '<div class="keys spec ru">Alt</div>',
  '<div class="keys spec ru">⇐</div>',
  '<div class="keys spec ru">⇓</div>',
  '<div class="keys spec ru">⇒</div>',
  '<div class="keys ctrl spec ru">Ctrl</div>',
]
let engKeyboard = [
  '<div num="`" class="keys spec">`</div>',
  '<div num="1" class="keys">1</div>',
  '<div num="2" class="keys">2</div>',
  '<div num="3" class="keys">3</div>',
  '<div num="4" class="keys">4</div>',
  '<div num="5" class="keys">5</div>',
  '<div num="6" class="keys">6</div>',
  '<div num="7" class="keys">7</div>',
  '<div num="8" class="keys">8</div>',
  '<div num="9" class="keys">9</div>',
  '<div num="0" class="keys">0</div>',
  '<div num="-" class="keys">-</div>',
  '<div num="=" class="keys">=</div>',
  '<div class="keys backspace spec">Backspace</div>',
  '<div class="keys tab spec">Tab</div>',
  '<div data="q" datacaps="Q" class="keys">q</div>',
  '<div data="w" datacaps="W" class="keys">w</div>',
  '<div data="e" datacaps="E" class="keys">e</div>',
  '<div data="r" datacaps="R" class="keys">r</div>',
  '<div data="t" datacaps="T" class="keys">t</div>',
  '<div data="y" datacaps="Y" class="keys">y</div>',
  '<div data="u" datacaps="U" class="keys">u</div>',
  '<div data="i" datacaps="I" class="keys">i</div>',
  '<div data="o" datacaps="O" class="keys">o</div>',
  '<div data="p" datacaps="P" class="keys">p</div>',
  '<div symb="[" class="keys">[</div>',
  '<div symb="]" class="keys">]</div>',
  '<div symb="\\" class="keys">\\</div>',
  '<div class="keys spec">DEL</div>',
  '<div class="keys big-keys caps  spec">Caps Lock</div>',
  '<div data="a" datacaps="A" class="keys">a</div>',
  '<div data="s" datacaps="S" class="keys">s</div>',
  '<div data="d" datacaps="D" class="keys">d</div>',
  '<div data="f" datacaps="F" class="keys">f</div>',
  '<div data="g" datacaps="G" class="keys">g</div>',
  '<div data="h" datacaps="H" class="keys">h</div>',
  '<div data="j" datacaps="J" class="keys">j</div>',
  '<div data="k" datacaps="K" class="keys">k</div>',
  '<div data="l" datacaps="L" class="keys">l</div>',
  '<div symb=";" class="keys">;</div>',
  '<div symb="\'" class="keys">\'</div>',
  '<div class="keys enter spec">ENTER</div>',
  '<div class="keys shift big-keys spec">Shift</div>',
  '<div data="z" datacaps="Z" class="keys">z</div>',
  '<div data="x" datacaps="X" class="keys">x</div>',
  '<div data="c" datacaps="C" class="keys">c</div>',
  '<div data="v" datacaps="V" class="keys">v</div>',
  '<div data="b" datacaps="B" class="keys">b</div>',
  '<div data="n" datacaps="N" class="keys">n</div>',
  '<div data="m" datacaps="M" class="keys">m</div>',
  '<div symb="," class="keys">,</div>',
  '<div symb="." class="keys">.</div>',
  '<div symb="/" class="keys">/</div>',
  '<div class="keys spec">⇑</div>',
  '<div class="keys shift big-keys right spec">Shift</div>',
  '<div class="keys ctrl left spec">Ctrl</div>',
  '<div class="keys spec">Win</div>',
  '<div class="keys spec">Alt</div>',
  '<div class="keys space"></div>',
  '<div class="keys spec">Alt</div>',
  '<div class="keys spec">⇐</div>',
  '<div class="keys spec">⇓</div>',
  '<div class="keys spec">⇒</div>',
  '<div class="keys ctrl spec">Ctrl</div>',
]
let keySymbols = [
  '<div numsy="~"  num="`" class="keys spec ru">`</div>',
  '<div numsy="!" num="1" class="keys ru">1</div>',
  '<div numsy="#" num="2" class="keys ru">2</div>',
  '<div numsy="#" num="3" class="keys ru">3</div>',
  '<div numsy="$" num="4" class="keys ru">4</div>',
  '<div numsy="%" num="5" class="keys ru">5</div>',
  '<div numsy="^" num="6" class="keys ru">6</div>',
  '<div numsy="&" num="7" class="keys ru">7</div>',
  '<div numsy="*" num="8" class="keys ru">8</div>',
  '<div numsy="(" num="9" class="keys ru">9</div>',
  '<div numsy=")" num="0" class="keys ru">0</div>',
  '<div numsy="_" num="-" class="keys ru">-</div>',
  '<div numsy="+" num="=" class="keys ru">=</div>',
  '<div class="keys backspace spec ru">Backspace</div>',
  '<div class="keys tab spec ru">Tab</div>',
  '<div data="й" datacaps="Й" class="keys ru">й</div>',
  '<div data="ц" datacaps="Ц" class="keys ru">ц</div>',
  '<div data="у" datacaps="У" class="keys ru">у</div>',
  '<div data="к" datacaps="К" class="keys ru">к</div>',
  '<div data="е" datacaps="Е" class="keys ru">е</div>',
  '<div data="н" datacaps="Н" class="keys ru">н</div>',
  '<div data="г" datacaps="Г" class="keys ru">г</div>',
  '<div data="ш" datacaps="Ш" class="keys ru">ш</div>',
  '<div data="щ" datacaps="Щ" class="keys ru">щ</div>',
  '<div data="з" datacaps="З" class="keys ru">з</div>',
  '<div data="х" datacaps="Х" class="keys ru">х</div>',
  '<div data="ъ" datacaps="Ъ" class="keys ru">ъ</div>',
  '<div symb="\\" class="keys ru">\\</div>',
  '<div class="keys spec ru">DEL</div>',
  '<div class="keys big-keys caps ru spec">Caps Lock</div>',
  '<div data="ф" datacaps="Ф" class="keys ru">ф</div>',
  '<div data="ы" datacaps="Ы" class="keys ru">ы</div>',
  '<div data="в" datacaps="В" class="keys ru">в</div>',
  '<div data="а" datacaps="А" class="keys ru">а</div>',
  '<div data="п" datacaps="П" class="keys ru">п</div>',
  '<div data="р" datacaps="Р" class="keys ru">р</div>',
  '<div data="о" datacaps="О" class="keys ru">о</div>',
  '<div data="л" datacaps="Л" class="keys ru">л</div>',
  '<div data="д" datacaps="Д" class="keys ru">д</div>',
  '<div data="ж" datacaps="Ж" class="keys ru">ж</div>',
  '<div data="э" datacaps="Э" class="keys ru">э</div>',
  '<div class="keys enter spec ru">ENTER</div>',
  '<div class="keys shift big-keys spec ru">Shift</div>',
  '<div data="я" datacaps="Z" class="keys ru">я</div>',
  '<div data="ч" datacaps="Ч" class="keys ru">ч</div>',
  '<div data="с" datacaps="С" class="keys ru">с</div>',
  '<div data="м" datacaps="М" class="keys ru">м</div>',
  '<div data="и" datacaps="И" class="keys ru">и</div>',
  '<div data="т" datacaps="Т" class="keys ru">т</div>',
  '<div data="ь" datacaps="Ь" class="keys ru">ь</div>',
  '<div data="б" datacaps="Б" class="keys ru">б</div>',
  '<div data="ю" datacaps="Ю" class="keys ru">ю</div>',
  '<div symb="/" class="keys ru">.</div>',
  '<div class="keys spec ru">⇑</div>',
  '<div class="keys shift big-keys right spec ru">Shift</div>',
  '<div class="keys ctrl left spec ru">Ctrl</div>',
  '<div class="keys spec ru">Win</div>',
  '<div class="keys spec ru">Alt</div>',
  '<div class="keys space ru"></div>',
  '<div class="keys spec ru">Alt</div>',
  '<div class="keys spec ru">⇐</div>',
  '<div class="keys spec ru">⇓</div>',
  '<div class="keys spec ru">⇒</div>',
  '<div class="keys ctrl spec ru">Ctrl</div>',
  '<div num="`" class="keys spec eng">`</div>',
  '<div num="1" class="keys eng">1</div>',
  '<div num="2" class="keys eng">2</div>',
  '<div num="3" class="keys eng">3</div>',
  '<div num="4" class="keys eng">4</div>',
  '<div num="5" class="keys eng">5</div>',
  '<div num="6" class="keys eng">6</div>',
  '<div num="7" class="keys eng">7</div>',
  '<div num="8" class="keys eng">8</div>',
  '<div num="9" class="keys eng">9</div>',
  '<div num="0" class="keys eng">0</div>',
  '<div num="-" class="keys eng">-</div>',
  '<div num="=" class="keys eng">=</div>',
  '<div class="keys backspace spec eng">Backspace</div>',
  '<div class="keys tab spec eng">Tab</div>',
  '<div data="q" datacaps="Q" class="keys eng">q</div>',
  '<div data="w" datacaps="W" class="keys eng">w</div>',
  '<div data="e" datacaps="E" class="keys eng">e</div>',
  '<div data="r" datacaps="R" class="keys eng">r</div>',
  '<div data="t" datacaps="T" class="keys eng">t</div>',
  '<div data="y" datacaps="Y" class="keys eng">y</div>',
  '<div data="u" datacaps="U" class="keys eng">u</div>',
  '<div data="i" datacaps="I" class="keys eng">i</div>',
  '<div data="o" datacaps="O" class="keys eng">o</div>',
  '<div data="p" datacaps="P" class="keys eng">p</div>',
  '<div symb="[" class="keys eng">[</div>',
  '<div symb="]" class="keys eng">]</div>',
  '<div symb="\\" class="keys eng">\\</div>',
  '<div class="keys spec eng">DEL</div>',
  '<div class="keys big-keys capse eng spec">Caps Lock</div>',
  '<div data="a" datacaps="A" class="keys eng">a</div>',
  '<div data="s" datacaps="S" class="keys eng">s</div>',
  '<div data="d" datacaps="D" class="keys eng">d</div>',
  '<div data="f" datacaps="F" class="keys eng">f</div>',
  '<div data="g" datacaps="G" class="keys eng">g</div>',
  '<div data="h" datacaps="H" class="keys eng">h</div>',
  '<div data="j" datacaps="J" class="keys eng">j</div>',
  '<div data="k" datacaps="K" class="keys eng">k</div>',
  '<div data="l" datacaps="L" class="keys eng">l</div>',
  '<div symb=";" class="keys eng">;</div>',
  '<div symb="\'" class="keys eng">\'</div>',
  '<div class="keys enter spec eng">ENTER</div>',
  '<div class="keys shift big-keys spec eng">Shift</div>',
  '<div data="z" datacaps="Z" class="keys eng">z</div>',
  '<div data="x" datacaps="X" class="keys eng">x</div>',
  '<div data="c" datacaps="C" class="keys eng">c</div>',
  '<div data="v" datacaps="V" class="keys eng">v</div>',
  '<div data="b" datacaps="B" class="keys eng">b</div>',
  '<div data="n" datacaps="N" class="keys eng">n</div>',
  '<div data="m" datacaps="M" class="keys eng">m</div>',
  '<div symb="," class="keys eng">,</div>',
  '<div symb="." class="keys eng">.</div>',
  '<div symb="/" class="keys eng">/</div>',
  '<div class="keys spec eng">⇑</div>',
  '<div class="keys shift big-keys right spec eng">Shift</div>',
  '<div class="keys ctrl left spec eng">Ctrl</div>',
  '<div class="keys spec eng">Win</div>',
  '<div class="keys spec eng">Alt</div>',
  '<div class="keys space eng"></div>',
  '<div class="keys spec eng">Alt</div>',
  '<div class="keys spec eng">⇐</div>',
  '<div class="keys spec eng">⇓</div>',
  '<div class="keys spec eng">⇒</div>',
  '<div class="keys ctrl spec eng">Ctrl</div>',
]







//     list  keys
// let keySymbols = [
//   '<div num="`" class="keys spec">`</div>',
//   '<div num="1" class="keys">1</div>',
//   '<div num="2" class="keys">2</div>',
//   '<div num="3" class="keys">3</div>',
//   '<div num="4" class="keys">4</div>',
//   '<div num="5" class="keys">5</div>',
//   '<div num="6" class="keys">6</div>',
//   '<div num="7" class="keys">7</div>',
//   '<div num="8" class="keys">8</div>',
//   '<div num="9" class="keys">9</div>',
//   '<div num="0" class="keys">0</div>',
//   '<div num="-" class="keys">-</div>',
//   '<div num="=" class="keys">=</div>',
//   '<div class="keys backspace spec">Backspace</div>',
//   '<div class="keys tab spec">Tab</div>',
//   '<div data="q" datacaps="Q" class="keys">q</div>',
//   '<div data="w" datacaps="W" class="keys">w</div>',
//   '<div data="e" datacaps="E" class="keys">e</div>',
//   '<div data="r" datacaps="R" class="keys">r</div>',
//   '<div data="t" datacaps="T" class="keys">t</div>',
//   '<div data="y" datacaps="Y" class="keys">y</div>',
//   '<div data="u" datacaps="U" class="keys">u</div>',
//   '<div data="i" datacaps="I" class="keys">i</div>',
//   '<div data="o" datacaps="O" class="keys">o</div>',
//   '<div data="p" datacaps="P" class="keys">p</div>',
//   '<div symb="[" class="keys">[</div>',
//   '<div symb="]" class="keys">]</div>',
//   '<div symb="\\" class="keys">\\</div>',
//   '<div class="keys spec">DEL</div>',
//   '<div class="keys big-keys caps  spec">Caps Lock</div>',
//   '<div data="a" datacaps="A" class="keys">a</div>',
//   '<div data="s" datacaps="S" class="keys">s</div>',
//   '<div data="d" datacaps="D" class="keys">d</div>',
//   '<div data="f" datacaps="F" class="keys">f</div>',
//   '<div data="g" datacaps="G" class="keys">g</div>',
//   '<div data="h" datacaps="H" class="keys">h</div>',
//   '<div data="j" datacaps="J" class="keys">j</div>',
//   '<div data="k" datacaps="K" class="keys">k</div>',
//   '<div data="l" datacaps="L" class="keys">l</div>',
//   '<div symb=";" class="keys">;</div>',
//   '<div symb="\'" class="keys">\'</div>',
//   '<div class="keys enter spec">ENTER</div>',
//   '<div class="keys shift big-keys spec">Shift</div>',
//   '<div data="z" datacaps="Z" class="keys">z</div>',
//   '<div data="x" datacaps="X" class="keys">x</div>',
//   '<div data="c" datacaps="C" class="keys">c</div>',
//   '<div data="v" datacaps="V" class="keys">v</div>',
//   '<div data="b" datacaps="B" class="keys">b</div>',
//   '<div data="n" datacaps="N" class="keys">n</div>',
//   '<div data="m" datacaps="M" class="keys">m</div>',
//   '<div symb="," class="keys">,</div>',
//   '<div symb="." class="keys">.</div>',
//   '<div symb="/" class="keys">/</div>',
//   '<div class="keys spec">⇑</div>',
//   '<div class="keys shift big-keys right spec">Shift</div>',
//   '<div class="keys ctrl left spec">Ctrl</div>',
//   '<div class="keys spec">Win</div>',
//   '<div class="keys spec">Alt</div>',
//   '<div class="keys space"></div>',
//   '<div class="keys spec">Alt</div>',
//   '<div class="keys spec">⇐</div>',
//   '<div class="keys spec">⇓</div>',
//   '<div class="keys spec">⇒</div>',
//   '<div class="keys ctrl spec">Ctrl</div>',
// ];
//-------------
let a = '';
for(let i = 0; i < keySymbols.length; i++){
  a += keySymbols[i];
}
keyboard.innerHTML = a;
document.body.append(keyboard);
// --------------
// language
let exArr = document.querySelector('.keyboard').children
let langStore = localStorage.getItem('lang')
console.log(langStore)
if(langStore == 'engl'){

for(let i = 0; i < exArr.length; i++){
  localStorage.setItem('lang','engl');
  if(exArr[i].classList.contains('ru')){
    exArr[i].classList.add('hidden');
  }
}


}else{
  for(let i = 0; i < exArr.length; i++){
    localStorage.setItem('lang','rus');
    
    if(exArr[i].classList.contains('eng')){
      
      exArr[i].classList.add('hidden');
      
    }
  }
}

langStore = localStorage.getItem('lang');




document.addEventListener('keydown', function(e) {
 
  if(e.ctrlKey && e.shiftKey) {  

    for(let i = 0; i < exArr.length; i++){
      
    exArr[i].classList.toggle('hidden')
    }
     
    if(langStore == 'engl'){
      localStorage.removeItem('lang')
     localStorage.setItem('lang', 'rus');
     langStore = localStorage.getItem('lang');
     
    }else{
      localStorage.removeItem('lang')
      localStorage.setItem('lang', 'engl');
      langStore = localStorage.getItem('lang');

    }
    
  }
 })

let englKeys = {
'Backquote': '`',

'KeyQ': 'q',

'KeyW': 'w',
'KeyE': 'e',

'KeyR': 'r',

'KeyT': 't',

'KeyY': 'y',

'KeyU': 'u',


'KeyI': 'i',


'KeyO': 'o',
'KeyP': 'p',
'BracketLeft': '[',

'BracketRight': ']',

'KeyA': 'a',


'KeyS': 's',


'KeyD': 'd',

KeyF: 'f',


'KeyG': 'g',


'KeyH': 'h',


'KeyJ': 'j',


'KeyK': 'k',


'KeyL': 'l',


'Semicolon': ';',

'Quote': "'",


'KeyZ': 'z',


'KeyX': 'x',


'KeyC': 'c',


'KeyV': 'v',

'KeyB': 'b',


'KeyN': 'n',

'KeyM': 'm',

'Comma': ',',
'Period': '.',
'Slash': '/'
}
let rusKeys = {
'Backquote': 'ё',

'KeyQ': 'й',

'KeyW': 'ц',
'KeyE': 'у',

'KeyR': 'к',

'KeyT': 'е',

'KeyY': 'н',

'KeyU': 'г',


'KeyI': 'ш',


'KeyO': 'щ',
'KeyP': 'з',
'BracketLeft': 'х',

'BracketRight': 'ъ',

'KeyA': 'ф',


'KeyS': 'ы',


'KeyD': 'в',

KeyF: 'а',


'KeyG': 'п',


'KeyH': 'р',


'KeyJ': 'о',


'KeyK': 'л',


'KeyL': 'д',


'Semicolon': 'ж',

'Quote': "э",


'KeyZ': 'я',


'KeyX': 'ч',


'KeyC': 'с',


'KeyV': 'м',

'KeyB': 'и',


'KeyN': 'т',

'KeyM': 'ь',

'Comma': 'б',
'Period': 'ю',
'Slash': '.'
}



 document.addEventListener('keydown', function(e) {
  if(e.shiftKey && e.target.hasAttribute('num')){console.log(147)}
  if(e.code == "Backspace") {
    let str = display.innerHTML;
    let newStr = str.slice(0, str.length - 1);
    display.innerHTML = newStr;

  }else if(e.code != 'Tab' && e.code != 'Enter' && e.code != 'CapsLock' && 
  e.code != 'ShiftLeft'
   && e.code != 'ControlLeft'  && e.code != 'MetaLeft' 
    && e.code != 'AltLeft'  && e.code != 'AltRight'
    && e.code != 'ControlRight' && e.code != 'ArrowUp'
    && e.code != 'ArrowLeft' && e.code != 'ArrowDown'
    && e.code != 'ArrowRight' && e.code != 'ShiftRight'){
      let push = e.code;
      // console.log(e.key);
      // console.log(e.code);
      if(langStore == 'engl'){
      if(englKeys[push] != undefined){
       console.log(langStore)
       let y = '';
       y += englKeys[push];
       display.innerHTML += y;
// подсветка клавиш на экране при нажатии на клаве
       let arrKeys = document.querySelectorAll('.keys');
       for(let i = 0; i < arrKeys.length; i++){
        if(arrKeys[i].getAttribute('data') == englKeys[push]){
          arrKeys[i].classList.add('light');
          setTimeout(function(){
            for(let i = 0; i < arrKeys.length; i++){
              arrKeys[i].classList.remove('light')
            }
          },0)
        }
       }
      }

     }else{
       
       if(rusKeys[push] != undefined){
         let y ='';
         y += rusKeys[push];
         display.innerHTML += y;
         // подсветка клавиш на экране при нажатии на клаве
         let arrKeys = document.querySelectorAll('.keys');
         for(let i = 0; i < arrKeys.length; i++){
          if(arrKeys[i].getAttribute('data') == rusKeys[push]){
            arrKeys[i].classList.add('light');
            setTimeout(function(){
              for(let i = 0; i < arrKeys.length; i++){
                arrKeys[i].classList.remove('light')
              }
            },0)
          }
         }
        
        }
     }
  }


   

})
//----------------------- event mouse
  //caps
  let caps = document.querySelector('.caps');
  let capsE = document.querySelector('.capse'); 

caps.addEventListener('click', function(){
  
  caps.classList.toggle('yes');
  capsE.classList.toggle('yes');
  let arr = document.querySelectorAll('.keys');
   if(caps.classList.contains('yes')){
    for(let i = 0; i < arr.length; i++){
      if(arr[i].hasAttribute('data')){
        arr[i].innerHTML = `<div data="${arr[i].getAttribute('data')}" datacaps="${arr[i].getAttribute('datacaps')}" class="keys">${arr[i].getAttribute('datacaps')}</div>`
      }
      
    }
  }else{
    for(let i = 0; i < arr.length; i++){
      if(arr[i].hasAttribute('data')){
        arr[i].innerHTML = `<div data="${arr[i].getAttribute('data')}" datacaps="${arr[i].getAttribute('datacaps')}" class="keys">${arr[i].getAttribute('data')}</div>`
      }
    }
  }
})

capsE.addEventListener('click', function(){

  capsE.classList.toggle('yes');
  caps.classList.toggle('yes');

  let arr = document.querySelectorAll('.keys');
   if(capsE.classList.contains('yes')){
    for(let i = 0; i < arr.length; i++){
      if(arr[i].hasAttribute('data')){
        
        arr[i].innerHTML = `<div data="${arr[i].getAttribute('data')}" datacaps="${arr[i].getAttribute('datacaps')}" class="keys">${arr[i].getAttribute('datacaps')}</div>`
      }
      
    }
  }else{
    for(let i = 0; i < arr.length; i++){
      if(arr[i].hasAttribute('data')){
        
        arr[i].innerHTML = `<div data="${arr[i].getAttribute('data')}" datacaps="${arr[i].getAttribute('datacaps')}" class="keys">${arr[i].getAttribute('data')}</div>`
      }
      
    }
  }
})

//keys
let keysArr = document.querySelector('.keyboard');


// shift

// keysArr.addEventListener('mousedown', function(e) {
//   if(e.target.classList.contains('shift')){
//     let arr = document.querySelectorAll('.keys');
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i].hasAttribute('data')){
//         arr[i].innerHTML = `<div data="${arr[i].getAttribute('data')}" datacaps="${arr[i].getAttribute('datacaps')}" class="keys">${arr[i].getAttribute('datacaps')}</div>`
//       }
//     }
//     keysArr.addEventListener('mouseup', function(e) {
//       let arr = document.querySelectorAll('.keys');
//       for(let i = 0; i < arr.length; i++){
//         if(arr[i].hasAttribute('data')){
//           arr[i].innerHTML = `<div data="${arr[i].getAttribute('data')}" datacaps="${arr[i].getAttribute('datacaps')}" class="keys">${arr[i].getAttribute('data')}</div>`
//         }
//       }
//     })
//   }
// })

//enter characters on display
keysArr.addEventListener('mousedown', function(e) {
// ---
  if(e.target.classList.contains('shift')){
    let arr = document.querySelectorAll('.keys');
    for(let i = 0; i < arr.length; i++){
      if(arr[i].hasAttribute('data')){
        arr[i].innerHTML = `<div data="${arr[i].getAttribute('data')}" datacaps="${arr[i].getAttribute('datacaps')}" class="keys">${arr[i].getAttribute('datacaps')}</div>`
      }
    }
    keysArr.addEventListener('mouseup', function(e) {
      let arr = document.querySelectorAll('.keys');
      for(let i = 0; i < arr.length; i++){
        if(arr[i].hasAttribute('data')){
          arr[i].innerHTML = `<div data="${arr[i].getAttribute('data')}" datacaps="${arr[i].getAttribute('datacaps')}" class="keys">${arr[i].getAttribute('data')}</div>`
        }
      }
    })
  }

// --
  let ee = e.target;
  if(ee.hasAttribute('data')){
  if(caps.classList.contains('yes')){
  display.innerHTML += ee.getAttribute('datacaps');
  }else{
    display.innerHTML += ee.getAttribute('data');
  }
  }else if(ee.hasAttribute('num')){
    display.innerHTML += ee.getAttribute('num');
  }else if(ee.classList.contains('backspace')){
    let str = display.innerHTML;
    let newStr = str.slice(0, str.length - 1);
    display.innerHTML = newStr;
  }else if(ee.hasAttribute('symb')){
    display.innerHTML += ee.getAttribute('symb');
  }else if(ee.classList.contains('enter')){
    display.innerHTML += '\n';
  }
})



// event keydown
// document.addEventListener("keydown",function(e){
//   //  console.log(e.code)
//   if(e.code == "Backspace") {
//     let str = display.innerHTML;
//     let newStr = str.slice(0, str.length - 1);
//     display.innerHTML = newStr;

//   }else if(e.code != 'Tab' && e.code != 'Enter' && e.code != 'CapsLock' && 
//   e.code != 'ShiftLeft'
//    && e.code != 'ControlLeft'  && e.code != 'MetaLeft' 
//     && e.code != 'AltLeft'  && e.code != 'AltRight'
//     && e.code != 'ControlRight' && e.code != 'ArrowUp'
//     && e.code != 'ArrowLeft' && e.code != 'ArrowDown'
//     && e.code != 'ArrowRight' && e.code != 'ShiftRight'){
//    display.innerHTML += `${e.key}`
//   }
// })

//--------------
document.onkeydown = function(e) {
  //  e.preventDefault();
  if(e.key == 'Alt' || e.key == 'AltGraph'){
    console.log(5555);
    e.preventDefault();
  }else if(e.key == 'Tab'){
    e.preventDefault();
    display.innerHTML += '    ';
  }else if(e.key == 'Enter'){
    e.preventDefault();
    display.innerHTML += '\n';
  }
}


//----cursor

function foo() {
  var selObj = window.getSelection();
  console.log(selObj)
  var selRange = selObj.getRangeAt(0);
  // вернёт диапазон Range
  console.log(selRange);
}

