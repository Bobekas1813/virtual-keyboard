'use strict'
const keyboardArr = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39];
let display = document.createElement('textarea');
display.classList.add('display');
document.body.append(display);
let keyboard = document.createElement('div');
keyboard.classList.add('keyboard')


//   add keybord

//     list  keys
let keySymbols = [
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
  '<div class="keys big-keys right spec">Shift</div>',
  '<div class="keys ctrl left spec">Ctrl</div>',
  '<div class="keys spec">Win</div>',
  '<div class="keys spec">Alt</div>',
  '<div class="keys space"></div>',
  '<div class="keys spec">Alt</div>',
  '<div class="keys spec">⇐</div>',
  '<div class="keys spec">⇓</div>',
  '<div class="keys spec">⇒</div>',
  '<div class="keys ctrl spec">Ctrl</div>',
];
//-------------
let a = '';
for(let i = 0; i < keySymbols.length; i++){
  a += keySymbols[i];
}
keyboard.innerHTML = a;
document.body.append(keyboard);
// --------------

//----------------------- event mouse
  //caps
let caps = document.querySelector('.caps');
caps.addEventListener('click', function(){
  caps.classList.toggle('yes');


  let arr = document.querySelectorAll('.keys');
   if(caps.classList.contains('yes')){
    for(let i = 0; i < arr.length; i++){
      console.log(arr[i].innerHTML)
      if(arr[i].hasAttribute('data')){
        
        arr[i].innerHTML = `<div data="${arr[i].getAttribute('data')}" datacaps="${arr[i].getAttribute('datacaps')}" class="keys">${arr[i].getAttribute('datacaps')}</div>`
      }
      
    }
  }else{
    for(let i = 0; i < arr.length; i++){
      console.log(arr[i].innerHTML)
      if(arr[i].hasAttribute('data')){
        
        arr[i].innerHTML = `<div data="${arr[i].getAttribute('data')}" datacaps="${arr[i].getAttribute('datacaps')}" class="keys">${arr[i].getAttribute('data')}</div>`
      }
      
    }
  }
})

//keys
let keysArr = document.querySelector('.keyboard');


// shift

keysArr.addEventListener('mousedown', function(e) {
  if(e.target.classList.contains('shift')){
    let arr = document.querySelectorAll('.keys');
    for(let i = 0; i < arr.length; i++){
      console.log(arr[i].innerHTML)
      if(arr[i].hasAttribute('data')){
        arr[i].innerHTML = `<div data="${arr[i].getAttribute('data')}" datacaps="${arr[i].getAttribute('datacaps')}" class="keys">${arr[i].getAttribute('datacaps')}</div>`
      }
    }
    keysArr.addEventListener('mouseup', function(e) {
      let arr = document.querySelectorAll('.keys');
      for(let i = 0; i < arr.length; i++){
        console.log(arr[i].innerHTML)
        if(arr[i].hasAttribute('data')){
          arr[i].innerHTML = `<div data="${arr[i].getAttribute('data')}" datacaps="${arr[i].getAttribute('datacaps')}" class="keys">${arr[i].getAttribute('data')}</div>`
        }
      }
    })
  }


})

//enter characters on display
keysArr.addEventListener('click', function(e) {
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
  }
})



// event keydown
document.addEventListener("keydown",function(e){

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
  display.innerHTML += `${e.key}`}
})

//--------------