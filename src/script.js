'use strict'

let display = document.createElement('textarea');
display.classList.add('display');
document.body.append(display);
let keyboard = document.createElement('div');
keyboard.classList.add('keyboard')



let keySymbols = [
  '<div numsy="~"  num="`" class="keys num ru">`</div>',
  '<div numsy="!" num="1" class="keys num ru">1</div>',
  '<div numsy="#" num="2" class="keys num ru">2</div>',
  '<div numsy="#" num="3" class="keys  num ru">3</div>',
  '<div numsy="$" num="4" class="keys num ru">4</div>',
  '<div numsy="%" num="5" class="keys num ru">5</div>',
  '<div numsy="^" num="6" class="keys num ru">6</div>',
  '<div numsy="&" num="7" class="keys num ru">7</div>',
  '<div numsy="*" num="8" class="keys num ru">8</div>',
  '<div numsy="(" num="9" class="keys num ru">9</div>',
  '<div numsy=")" num="0" class="keys num ru">0</div>',
  '<div numsy="_" num="-" class="keys num ru">-</div>',
  '<div numsy="+" num="=" class="keys num ru">=</div>',
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
  '<div class="keys big-keys kk caps ru spec">Caps Lock</div>',
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
  '<div class="keys shift lef big-keys spec ru">Shift</div>',
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
  '<div arrow="⇑" class="keys spec artr ar ru">⇑</div>',
  '<div class="keys shift big-keys right spec ru">Shift</div>',
  '<div class="keys ctrl left spec ru">Ctrl</div>',
  '<div class="keys win spec ru">Win</div>',
  '<div class="keys altl spec ru">Alt</div>',
  '<div class="keys space ru"></div>',
  '<div class="keys altr spec  ru">Alt</div>',
  '<div arrow="⇐" class="keys spec arlr ar ru">⇐</div>',
  '<div arrow="⇓" class="keys spec ardr ar ru">⇓</div>',
  '<div arrow="⇒" class="keys spec arrr ar ru">⇒</div>',
  '<div class="keys ctrl ctrr spec ru">Ctrl</div>',
  '<div numsy="~" num="`" class="keys eng">`</div>',
  '<div numsy="!" num="1" class="keys num eng">1</div>',
  '<div numsy="@" num="2" class="keys num eng">2</div>',
  '<div numsy="#" num="3" class="keys num eng">3</div>',
  '<div numsy="$" num="4" class="keys num eng">4</div>',
  '<div numsy="%" num="5" class="keys num eng">5</div>',
  '<div numsy="^" num="6" class="keys num eng">6</div>',
  '<div numsy="&" num="7" class="keys num eng">7</div>',
  '<div numsy="*" num="8" class="keys num eng">8</div>',
  '<div numsy="(" num="9" class="keys num eng">9</div>',
  '<div numsy=")" num="0" class="keys num eng">0</div>',
  '<div numsy="_" num="-" class="keys num eng">-</div>',
  '<div numsy="+" num="=" class="keys num eng">=</div>',
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
  '<div class="keys big-keys kk capse eng spec">Caps Lock</div>',
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
  '<div class="keys shift lef big-keys spec eng">Shift</div>',
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
  '<div arrow="⇑" class="keys spec art ar eng">⇑</div>',
  '<div class="keys shift big-keys right spec eng">Shift</div>',
  '<div class="keys ctrl left spec eng">Ctrl</div>',
  '<div class="keys win spec eng">Win</div>',
  '<div class="keys altl spec eng">Alt</div>',
  '<div class="keys space eng"></div>',
  '<div class="keys altr spec eng">Alt</div>',
  '<div arrow="⇐" class="keys spec ar arl eng">⇐</div>',
  '<div arrow="⇓" class="keys spec ar ard eng">⇓</div>',
  '<div arrow="⇒" class="keys spec ar arr eng">⇒</div>',
  '<div class="keys ctrl ctrr spec ar eng">Ctrl</div>',
]





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


// space
  if(e.code == 'Space'){
    document.querySelectorAll('.space').forEach(a => a.classList.add('light'));
    setTimeout(()=>{
      document.querySelectorAll('.space').forEach(a => a.classList.remove('light'));
    },500)
    display.innerHTML += ' ';
  }
  // Arrows
  if(e.code == 'ArrowUp'){
    e.preventDefault();
    display.innerHTML += '⇑';
   document.querySelector('.art').classList.add('light');
   setTimeout(()=>{
    document.querySelector('.art').classList.remove('light');
   },500)
   document.querySelector('.artr').classList.add('light');
   setTimeout(()=>{
    document.querySelector('.artr').classList.remove('light');
   },500)
  }else if(e.code == 'ArrowDown'){
    e.preventDefault();
    display.innerHTML += '⇓';
    document.querySelector('.ard').classList.add('light');
    setTimeout(()=>{
     document.querySelector('.ard').classList.remove('light');
    },500)
    document.querySelector('.ardr').classList.add('light');
    setTimeout(()=>{
     document.querySelector('.ardr').classList.remove('light');
    },500)
  }else if(e.code == 'ArrowRight'){
    e.preventDefault();
    display.innerHTML += '⇒';
    document.querySelector('.arr').classList.add('light');
    setTimeout(()=>{
     document.querySelector('.arr').classList.remove('light');
    },500)
    document.querySelector('.arrr').classList.add('light');
    setTimeout(()=>{
     document.querySelector('.arrr').classList.remove('light');
    },500)
  }else if(e.code == 'ArrowLeft'){
    e.preventDefault();
    display.innerHTML += '⇐';
    document.querySelector('.arl').classList.add('light');
    setTimeout(()=>{
     document.querySelector('.arl').classList.remove('light');
    },0)
    document.querySelector('.arlr').classList.add('light');
    setTimeout(()=>{
     document.querySelector('.arlr').classList.remove('light');
    },0)
  }

  // caps lock
   if(e.code == 'CapsLock'){
    document.querySelector('.caps').classList.toggle('up');
    document.querySelector('.caps').classList.toggle('light');
    document.querySelector('.capse').classList.toggle('up');
    document.querySelector('.capse').classList.toggle('light');
    document.querySelector('.caps').classList.toggle('keys');
    document.querySelector('.capse').classList.toggle('keys');
    if(document.querySelector('.caps').classList.contains('up') && document.querySelector('.capse').classList.contains('up')){
    let arrr = document.querySelectorAll('.keys');
    for(let i = 0; i < arrr.length; i++){
     if(arrr[i].hasAttribute('data')){
       if(langStore == 'engl'){
         arrr[i].innerHTML = `<div data="${arrr[i].getAttribute('data')}" datacaps="${arrr[i].getAttribute('datacaps')}" class="keys eng">${arrr[i].getAttribute('datacaps')}</div>`;
       }else if(langStore == 'rus'){
         arrr[i].innerHTML = `<div data="${arrr[i].getAttribute('data')}" datacaps="${arrr[i].getAttribute('datacaps')}" class="keys ru">${arrr[i].getAttribute('datacaps')}</div>`;
       }
     }
    }
  }else if(!document.querySelector('.caps').classList.contains('up') && !document.querySelector('.capse').classList.contains('up')){
    let arrr = document.querySelectorAll('.keys');
    for(let i = 0; i < arrr.length; i++){
     if(arrr[i].hasAttribute('data')){
       if(langStore == 'engl'){
         arrr[i].innerHTML = `<div data="${arrr[i].getAttribute('data')}" datacaps="${arrr[i].getAttribute('datacaps')}" class="keys eng">${arrr[i].getAttribute('data')}</div>`;
       }else if(langStore == 'rus'){
         arrr[i].innerHTML = `<div data="${arrr[i].getAttribute('data')}" datacaps="${arrr[i].getAttribute('datacaps')}" class="keys ru">${arrr[i].getAttribute('data')}</div>`;
       }
     }
    }
  }
   }

  // shift + key
   if(e.key == 'Shift'){
    if(e.code == 'ShiftLeft'){
    document.querySelectorAll('.lef').forEach((a) => {
      console.log(a)
      a.classList.add('light');
    });
    setTimeout(()=>{
      document.querySelectorAll('.lef').forEach((a) => {
        a.classList.remove('light');
      })
    },500)
  }else if(e.code == 'ShiftRight'){
    document.querySelectorAll('.right').forEach((a) => {
      console.log(a)
      a.classList.add('light');
    });
    setTimeout(()=>{
      document.querySelectorAll('.right').forEach((a) => {
        a.classList.remove('light');
      })
    },500)
  }
    if(!document.querySelector('.caps').classList.contains('up')){
    let arrr = document.querySelectorAll('.keys');
     for(let i = 0; i < arrr.length; i++){
      if(arrr[i].hasAttribute('data')){
        if(langStore == 'engl'){
          arrr[i].innerHTML = `<div data="${arrr[i].getAttribute('data')}" datacaps="${arrr[i].getAttribute('datacaps')}" class="keys eng">${arrr[i].getAttribute('datacaps')}</div>`;
        }else if(langStore == 'rus'){
          arrr[i].innerHTML = `<div data="${arrr[i].getAttribute('data')}" datacaps="${arrr[i].getAttribute('datacaps')}" class="keys ru">${arrr[i].getAttribute('datacaps')}</div>`;
        }
      }else if(arrr[i].hasAttribute('num')){
        if(langStore == 'engl'){
           arrr[i].innerHTML = `<div numsy="${arrr[i].getAttribute('numsy')}" num="${arrr[i].getAttribute('num')}" class="keys num eng">${arrr[i].getAttribute('numsy')}</div>`
        }else if(langStore == 'rus'){
          arrr[i].innerHTML = `<div numsy="${arrr[i].getAttribute('numsy')}" num="${arrr[i].getAttribute('num')}" class="keys num ru">${arrr[i].getAttribute('numsy')}</div>`
        }
      }
      
     }
    }
     document.addEventListener('keyup' , function(){
       if(e.key == 'Shift'){
       let arrr = document.querySelectorAll('.keys');
       for(let i = 0; i < arrr.length; i++){
        if(arrr[i].hasAttribute('data')){
          if(!document.querySelector('.caps').classList.contains('up')){
          if(langStore == 'engl'){
            arrr[i].innerHTML = `<div data="${arrr[i].getAttribute('data')}" datacaps="${arrr[i].getAttribute('datacaps')}" class="keys eng">${arrr[i].getAttribute('data')}</div>`;
          }else if(langStore == 'rus'){
            arrr[i].innerHTML = `<div data="${arrr[i].getAttribute('data')}" datacaps="${arrr[i].getAttribute('datacaps')}" class="keys ru">${arrr[i].getAttribute('data')}</div>`;
          }
        }
        }else if(arrr[i].hasAttribute('num')){
          if(!document.querySelector('.caps').classList.contains('up')){
          if(langStore == 'engl'){
            arrr[i].innerHTML = `<div numsy="${arrr[i].getAttribute('numsy')}" num="${arrr[i].getAttribute('num')}" class="keys num eng">${arrr[i].getAttribute('num')}</div>`
         }else if(langStore == 'rus'){
           arrr[i].innerHTML = `<div numsy="${arrr[i].getAttribute('numsy')}" num="${arrr[i].getAttribute('num')}" class="keys num ru">${arrr[i].getAttribute('num')}</div>`
         }
        }
      }
       }
      }
     })
   }
  

  // digits
  let str = e.key
  if(str.match(/\d/)){
    display.innerHTML += str;
    let dig = document.querySelectorAll('.num');
    for(let i = 0; i < dig.length; i++){
      if(dig[i].getAttribute('num') == str){
        dig[i].classList.add('light');
      }
    }
    setTimeout(function(){
      for(let i = 0; i < dig.length; i++){
        dig[i].classList.remove('light');
      }},500)
  }
  
  

// shift + digit

  if(e.shiftKey && e.code == 'Digit1'){

    display.innerHTML += '!';
    // num = document.querySelector('nums');
    console.log(e.key)
  }else if(e.shiftKey && e.code == 'Digit2'){
    display.innerHTML += '@';
  }else if(e.shiftKey && e.code == 'Digit3'){
    display.innerHTML += '#'
  }else if(e.shiftKey && e.code == 'Digit4'){
    display.innerHTML += '$';
  }else if(e.shiftKey && e.code == 'Digit5'){
    display.innerHTML += '%';
  }else if(e.shiftKey && e.code == 'Digit6'){
    display.innerHTML += '^';
  }else if(e.shiftKey && e.code == 'Digit7'){
    display.innerHTML += '&';
  }else if(e.shiftKey && e.code == 'Digit8'){
    display.innerHTML += '*'
  }else if(e.shiftKey && e.code == 'Digit9'){
    display.innerHTML += '(';
  }else if(e.shiftKey && e.code == 'Digit0'){
    display.innerHTML += ')'
  }else if(e.shiftKey && e.code == 'Minus'){
    display.innerHTML += '_';
  }else if(e.shiftKey && e.code == 'Equal'){
    display.innerHTML += '+';
  }


  if(e.code == "Backspace") {
    document.querySelectorAll('.backspace').forEach((a) => a.classList.add('light'));
    setTimeout(()=>{
      document.querySelectorAll('.backspace').forEach((a) => a.classList.remove('light'));
    }, 500)
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
// input keys
      if(langStore == 'engl'){
      if(englKeys[push] != undefined){
        
       console.log(langStore)
       let y = '';
       y += englKeys[push];
       display.innerHTML += y;
//  enter keys if cpas lock on
       if(document.querySelector('.caps').classList.contains('up')){
        let t = display.innerHTML;
        let r = t[t.length - 1];
        display.innerHTML = t.slice(0, t.length - 1) + r.toUpperCase();
       }
// подсветка клавиш на экране при нажатии на клаве
       let arrKeys = document.querySelectorAll('.keys');
       for(let i = 0; i < arrKeys.length; i++){
     
        if(arrKeys[i].getAttribute('data') == englKeys[push]){
          arrKeys[i].classList.add('light');
          setTimeout(function(){
            for(let i = 0; i < arrKeys.length; i++){
              arrKeys[i].classList.remove('light')
            }
          },500)
        }
       }
      }

     }else{
       
       if(rusKeys[push] != undefined){
         let y ='';
         y += rusKeys[push];
         display.innerHTML += y;
      //  enter keys if cpas lock on
         if(document.querySelector('.caps').classList.contains('up')){
          let t = display.innerHTML;
          let r = t[t.length - 1];
          display.innerHTML = t.slice(0, t.length - 1) + r.toUpperCase();
         }
         // подсветка клавиш на экране при нажатии на клаве
         let arrKeys = document.querySelectorAll('.keys');
         for(let i = 0; i < arrKeys.length; i++){
          if(arrKeys[i].getAttribute('data') == rusKeys[push]){
            arrKeys[i].classList.add('light');
            setTimeout(function(){
              for(let i = 0; i < arrKeys.length; i++){
                arrKeys[i].classList.remove('light')
              }
            },500)
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





//enter characters on display
keysArr.addEventListener('mousedown', function(e) {
// ---
  if(e.target.classList.contains('shift')){
    let arr = document.querySelectorAll('.keys');
    for(let i = 0; i < arr.length; i++){
      if(arr[i].hasAttribute('data')){
        arr[i].innerHTML = `<div data="${arr[i].getAttribute('data')}" datacaps="${arr[i].getAttribute('datacaps')}" class="keys">${arr[i].getAttribute('datacaps')}</div>`
      }else if(arr[i].hasAttribute('num')){
        arr[i].innerHTML = `<div numsy="${arr[i].getAttribute('numsy')}"  num="${arr[i].getAttribute('num')}" class="keys num ru">${arr[i].getAttribute('numsy')}</div>`
      }
    }
    keysArr.addEventListener('mouseup', function() {
      let arr = document.querySelectorAll('.keys');
      for(let i = 0; i < arr.length; i++){
        if(arr[i].hasAttribute('data')){
          arr[i].innerHTML = `<div data="${arr[i].getAttribute('data')}" datacaps="${arr[i].getAttribute('datacaps')}" class="keys">${arr[i].getAttribute('data')}</div>`
        }else if(arr[i].hasAttribute('num')){
          arr[i].innerHTML = `<div numsy="${arr[i].getAttribute('numsy')}"  num="${arr[i].getAttribute('num')}" class="keys num ru">${arr[i].getAttribute('num')}</div>`
        }
      }
    })
  }else if(e.target.classList.contains('ar')){
      display.innerHTML += e.target.getAttribute('arrow');
  }else if(e.target.classList.contains('space')){
    display.innerHTML += ' ';
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
    if(e.code == 'AltLeft'){
      document.querySelectorAll('.altl').forEach((a) => {
        console.log(a)
        a.classList.add('light');
      });
      setTimeout(()=>{
        document.querySelectorAll('.altl').forEach((a) => {
          a.classList.remove('light');
        })
      },500)
    }else if(e.code == 'AltRight'){
      document.querySelectorAll('.altr').forEach((a) => {
        console.log(a)
        a.classList.add('light');
      });
      setTimeout(()=>{
        document.querySelectorAll('.altr').forEach((a) => {
          a.classList.remove('light');
        })
      },500)
    }
  }else if(e.key == 'Tab'){
    e.preventDefault();
    display.innerHTML += '    ';
    document.querySelectorAll('.tab').forEach((a) => {
      a.classList.add('light');
    });
    setTimeout(()=>{
      document.querySelectorAll('.tab').forEach((a) => {
        a.classList.remove('light');
      })
    },500)
  }else if(e.key == 'Enter'){
    e.preventDefault();
    display.innerHTML += '\n';
    document.querySelectorAll('.enter').forEach((a) => {
      a.classList.add('light');
    });
    setTimeout(()=>{
      document.querySelectorAll('.enter').forEach((a) => {
        a.classList.remove('light');
      })
    },500)
  }else if(e.code == 'F11' || e.code == 'F12' || e.code == 'F10' ||
    e.code == 'F9' || e.code == 'F8' || e.code == 'F7' || e.code == 'F6' ||
    e.code == 'F5' || e.code == 'F4' || e.code == 'F3' || e.code == 'F2' || e.code == 'F1'
    ){
    e.preventDefault();
    let ss = display.innerHTML;
    display.innerHTML = ss.slice(0, ss.length - e.code.length);
  }else if(e.key == 'Control'){
    if(e.code == 'ControlLeft'){
      document.querySelectorAll('.left').forEach((a) => {
        console.log(a)
        a.classList.add('light');
      });
      setTimeout(()=>{
        document.querySelectorAll('.left').forEach((a) => {
          a.classList.remove('light');
        })
      },500)
    }else if(e.code == 'ControlRight'){
      document.querySelectorAll('.ctrr').forEach((a) => {
        console.log(a)
        a.classList.add('light');
      });
      setTimeout(()=>{
        document.querySelectorAll('.ctrr').forEach((a) => {
          a.classList.remove('light');
        })
      },500)
    }
  }else if(e.key == 'Meta'){
    document.querySelectorAll('.win').forEach((a) => {
      a.classList.add('light');
    });
    setTimeout(()=>{
      document.querySelectorAll('.win').forEach((a) => {
        a.classList.remove('light');
      })
    },500)
  }
}



let text = document.createElement('p');
text.classList.add('text')
text.innerHTML = 'Клавиатура создана в операционной системе Windows. \n Для переключения языка комбинация: любые ctrl + shift'
document.body.append(text);