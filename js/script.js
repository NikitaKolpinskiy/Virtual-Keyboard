const body = document.querySelector("#body");

//Config for the keyboard

const keys = [
  [
    {ruUiValue:"", ruValue: "", keyCode:'Escape', enUiValue: "Esc", enValue: "", fractions: 2 },
    {ruUiValue:"",  ruValue: "", keyCode:'F1', enUiValue: "F1", enValue: "", fractions: 1 },
    {ruUiValue:"",  ruValue: "", keyCode:'F2', enUiValue: "F2", enValue: "", fractions: 1 },
    {ruUiValue:"",  ruValue: "", keyCode:'F3', enUiValue: "F3", enValue: "", fractions: 1 },
    {ruUiValue:"",  ruValue: "", keyCode:'F4', enUiValue: "F4", enValue: "", fractions: 1 },
    {ruUiValue:"",  ruValue: "", keyCode:'F5', enUiValue: "F5", enValue: "", fractions: 1 },
    {ruUiValue:"",  ruValue: "", keyCode:'F6', enUiValue: "F6", enValue: "", fractions: 1 },
    {ruUiValue:"",  ruValue: "", keyCode:'F7', enUiValue: "F7", enValue: "", fractions: 1 },
    {ruUiValue:"",  ruValue: "", keyCode:'F8', enUiValue: "F8", enValue: "", fractions: 1 },
    {ruUiValue:"",  ruValue: "", keyCode:'F9', enUiValue: "F9", enValue: "", fractions: 1 },
    {ruUiValue:"", ruValue: "", keyCode:'F10', enUiValue: "F10", enValue: "", fractions: 1 },
    {ruUiValue:"", ruValue: "", keyCode:'F11', enUiValue: "F11", enValue: "", fractions: 1 },
    {ruUiValue:"", ruValue: "", keyCode:'F12', enUiValue: "F12", enValue: "", fractions: 1 },
    {ruUiValue:"", ruValue: "", keyCode:'Home', enUiValue: "Home", enValue: "", fractions: 1 },
    {ruUiValue:"", ruValue: "", keyCode:'End', enUiValue: "End", enValue: "", fractions: 1 },
    {ruUiValue:"", ruValue: "", keyCode:'Insert',  enUiValue: "Insert", enValue: "", fractions: 1 },
    {ruUiValue:"", ruValue: "", keyCode:'Delete',  enUiValue: "Delete", enValue: "", fractions: 1 },
  ],
  [
    {ruUiValue: "Ё", ruValue: "Ё", keyCode:'Backquote', enUiValue: "~", enValue: "~", fractions: 1 },
    {ruUiValue: "", ruValue: "1", keyCode:'Digit1', enUiValue: "1", enValue: "1",  fractions: 1 },
    {ruUiValue: "", ruValue: "2", keyCode:'Digit2', enUiValue: "2", enValue: "2",  fractions: 1 },
    {ruUiValue: "", ruValue: "3", keyCode:'Digit3', enUiValue: "3", enValue: "3",  fractions: 1 },
    {ruUiValue: "", ruValue: "4", keyCode:'Digit4', enUiValue: "4", enValue: "4",  fractions: 1 },
    {ruUiValue: "", ruValue: "5", keyCode:'Digit5', enUiValue: "5", enValue: "5",  fractions: 1 },
    {ruUiValue: "", ruValue: "6", keyCode:'Digit6', enUiValue: "6", enValue: "6",  fractions: 1 },
    {ruUiValue: "", ruValue: "7", keyCode:'Digit7', enUiValue: "7", enValue: "7",  fractions: 1 },
    {ruUiValue: "", ruValue: "8", keyCode:'Digit8', enUiValue: "8", enValue: "8",  fractions: 1 },
    {ruUiValue: "", ruValue: "9", keyCode:'Digit9', enUiValue: "9", enValue: "9",  fractions: 1 },
    {ruUiValue: "", ruValue: "0", keyCode:'Digit0', enUiValue: "0", enValue: "0",  fractions: 1 },
    {ruUiValue: "", ruValue: "-", keyCode:'Minus', enUiValue: "-", enValue: "-", fractions: 1 },
    {ruUiValue: "", ruValue: "=", keyCode:'Equal', enUiValue: "=", enValue: "=", fractions: 1 },
    {ruUiValue: "", ruValue: "Backspace", keyCode:'Backspace', enUiValue: "Backspace", enValue:"Backspace", fractions: 5 },
  ],
  [
    {ruUiValue: "", ruValue: "  ",  keyCode: 'Tab',  enUiValue: "Tab", enValue: "  ", fractions: 3 },
    {ruUiValue: "Й", ruValue: "Й", keyCode: 'KeyQ',  enUiValue: "Q", enValue: "Q", fractions: 1 },
    {ruUiValue: "Ц", ruValue: "Ц", keyCode: 'KeyW',  enUiValue: "W", enValue: "W", fractions: 1 },
    {ruUiValue: "У", ruValue: "У", keyCode: 'KeyE',  enUiValue: "E", enValue: "E", fractions: 1 },
    {ruUiValue: "К", ruValue: "К", keyCode: 'KeyR',  enUiValue: "R", enValue: "R", fractions: 1 },
    {ruUiValue: "Е", ruValue: "Е", keyCode: 'KeyT',  enUiValue: "T", enValue: "T", fractions: 1 },
    {ruUiValue: "Н", ruValue: "Н", keyCode: 'KeyY',  enUiValue: "Y", enValue: "Y", fractions: 1 },
    {ruUiValue: "Г", ruValue: "Г", keyCode: 'KeyU',  enUiValue: "U", enValue: "U", fractions: 1 },
    {ruUiValue: "Ш", ruValue: "Ш", keyCode: 'KeyI',  enUiValue: "I", enValue: "I", fractions: 1 },
    {ruUiValue: "Щ", ruValue: "Щ", keyCode: 'KeyO',  enUiValue: "O", enValue: "O", fractions: 1 },
    {ruUiValue: "З", ruValue: "З", keyCode: 'KeyP',  enUiValue: "P", enValue: "P", fractions: 1 },
    {ruUiValue: "Х", ruValue: "Х", keyCode: 'BracketLeft', enUiValue: "{", enValue: "{", fractions: 1 },
    {ruUiValue: "Ъ", ruValue: "Ъ", keyCode: 'BracketRight', enUiValue: "}", enValue: "}",  fractions: 1 },
    {ruUiValue: "\\", ruValue: "\\",  keyCode: 'Backslash', enUiValue: "|", enValue: "|",  fractions: 3 },
  ],  
  [
    {ruUiValue: "", ruValue: "CapsLock", keyCode: 'CapsLock', enUiValue: "CapsLock", enValue: "CapsLock", fractions: 4 },
    {ruUiValue: "Ф", ruValue: "Ф",  keyCode: 'KeyA', enUiValue: "A", enValue: "A", fractions: 1 },
    {ruUiValue: "Ы", ruValue: "Ы",  keyCode: 'KeyS', enUiValue: "S", enValue: "S", fractions: 1 },
    {ruUiValue: "В", ruValue: "В",  keyCode: 'KeyD', enUiValue: "D", enValue: "D", fractions: 1 },
    {ruUiValue: "А", ruValue: "А",  keyCode: 'KeyF', enUiValue: "F", enValue: "F", fractions: 1 },
    {ruUiValue: "П", ruValue: "П",  keyCode: 'KeyG', enUiValue: "G", enValue: "G", fractions: 1 },
    {ruUiValue: "Р", ruValue: "Р",  keyCode: 'KeyH', enUiValue: "H", enValue: "H", fractions: 1 },
    {ruUiValue: "О", ruValue: "О",  keyCode: 'KeyJ', enUiValue: "J", enValue: "J", fractions: 1 },
    {ruUiValue: "Л", ruValue: "Л",  keyCode: 'KeyK', enUiValue: "K", enValue: "K", fractions: 1 },
    {ruUiValue: "Д", ruValue: "Д",  keyCode: 'KeyL', enUiValue: "L", enValue: "L", fractions: 1 },
    {ruUiValue: "Ж", ruValue: "Ж",  keyCode: 'Semicolon',  enUiValue: ":", enValue: ":",   fractions: 1 },
    {ruUiValue: "Э", ruValue: "Э",  keyCode: 'Quote',  enUiValue: '"', enValue: "''",  fractions: 1 },
    {ruUiValue: "", ruValue: "",  keyCode: 'Enter', enUiValue: "Enter", enValue: "", fractions: 5 },
  ],
  [
    {ruUiValue: "", ruValue: "",  keyCode:'ShiftLeft',  enUiValue: "L. Shift", enValue: "",  fractions: 5 },
    {ruUiValue: "Я", ruValue: "Я", keyCode:'KeyZ',  enUiValue: "Z", enValue: "Z",  fractions: 1 },
    {ruUiValue: "Ч", ruValue: "Ч", keyCode:'KeyX',  enUiValue: "X", enValue: "X",  fractions: 1 },
    {ruUiValue: "С", ruValue: "С", keyCode:'KeyC',  enUiValue: "C", enValue: "C",  fractions: 1 },
    {ruUiValue: "М", ruValue: "М", keyCode:'KeyV',  enUiValue: "V", enValue: "V",  fractions: 1 },
    {ruUiValue: "И", ruValue: "И", keyCode:'KeyB',  enUiValue: "B", enValue: "B",  fractions: 1 },
    {ruUiValue: "Т", ruValue: "Т", keyCode:'KeyN',  enUiValue: "N", enValue: "N",  fractions: 1 },
    {ruUiValue: "Ь", ruValue: "Ь", keyCode:'KeyM',  enUiValue: "M", enValue: "M",  fractions: 1 },
    {ruUiValue: "Б", ruValue: "Б", keyCode:'Comma', enUiValue: "<", enValue: "<",  fractions: 1 },
    {ruUiValue: "Ю", ruValue: "Ю", keyCode:'Period', enUiValue: ">", enValue: ">",  fractions: 1 },
    {ruUiValue: ".", ruValue: ".", keyCode:'Slash', enUiValue: "/", enValue: "/",  fractions: 1 },
    {ruUiValue: "", ruValue: "", keyCode:'ShiftRight',  enUiValue: "R. Shift", enValue: "",  fractions: 5 },
    {ruUiValue: "", ruValue: "ᐃ", keyCode:'ArrowUp', enUiValue: "ᐃ", enValue: "ᐃ",  fractions: 1 },
    {ruUiValue: "", ruValue: "", keyCode:'NumLock', enUiValue: "Num", enValue: "",  fractions: 1 },
  ],
  [
    {ruUiValue: "", ruValue: "",  keyCode:'ControlLeft', enUiValue: "Ctrl", enValue: "",  fractions: 3 },
    {ruUiValue: "", ruValue: "",  keyCode:'MetaLeft', enUiValue: "Start", enValue: "",  fractions: 1 },
    {ruUiValue: "", ruValue: "",  keyCode:'AltLeft', enUiValue: "Alt", enValue: "",  fractions: 1 },
    {ruUiValue: "", ruValue: " ",  keyCode:'Space', enUiValue: "Space", enValue: " ",  fractions: 22 },
    {ruUiValue: "", ruValue: "",  keyCode:'AltRight', enUiValue: "AltGr", enValue: "",  fractions: 1 },
    {ruUiValue: "", ruValue: "",  keyCode:'ControlRight', enUiValue: "Crtl", enValue: "",  fractions: 1 },
    {ruUiValue: "", ruValue: "ᐊ",  keyCode:'ArrowLeft', enUiValue: "ᐊ", enValue: "ᐊ",  fractions: 1 },
    {ruUiValue: "", ruValue: "ᐁ",  keyCode:'ArrowDown', enUiValue: "ᐁ", enValue: "ᐁ",  fractions: 1 },
    {ruUiValue: "", ruValue: "ᐅ",  keyCode:'ArrowRight', enUiValue: "ᐅ", enValue: "ᐅ",  fractions: 1 },
  ],
];

const textArea                = document.createElement("textarea");
const keyboardWrapper         = document.createElement("div");
const keyboardLine            = document.createElement("ul");
const keyboardButton          = document.createElement("li");
const keyboardButtonEnLetter  = document.createElement("span");
const keyboardButtonRuLetter  = document.createElement("span");
const informationWrapper      = document.createElement("div");
const informationText         = document.createElement("span");

textArea.classList.add("keyboard-area");
keyboardWrapper.classList.add("keyboard-container");
keyboardLine.classList.add("keyboard-line");
keyboardButton.classList.add("keyboard-button");
keyboardButtonEnLetter.classList.add("keyboard-button__en-letter");
keyboardButtonRuLetter.classList.add("keyboard-button__ru-letter");
informationWrapper.classList.add("information-container");
informationText.classList.add("information-text");


keys.forEach((line, i, arr) => {
  const lineUI = keyboardLine.cloneNode();
  const lastIndex = arr.length - 1; 

  line.forEach((buttonConfig) => {
    const buttonUI = keyboardButton.cloneNode();
    const enLetter = keyboardButtonEnLetter.cloneNode();
    const ruLetter = keyboardButtonRuLetter.cloneNode();

    enLetter.innerText = buttonConfig.enUiValue;
    ruLetter.innerText  = buttonConfig.ruUiValue;
    buttonUI.appendChild(enLetter);
    buttonUI.appendChild(ruLetter);

    buttonUI.dataset.enValue = buttonConfig.enValue;
    buttonUI.dataset.ruValue = buttonConfig.ruValue;
    buttonUI.dataset.keyCode = buttonConfig.keyCode;
    buttonUI.classList.add(`keyboard-button-fractions-${buttonConfig.fractions}`);
    buttonUI.addEventListener("click", onButtonClick);
    lineUI.appendChild(buttonUI);
  });
  lineUI.classList.add(
    i !== lastIndex ? "bottom-margin-10" : "bottom-margin-0"
  );
  keyboardWrapper.appendChild(lineUI);
});

body.appendChild(textArea);
body.appendChild(keyboardWrapper);
body.appendChild(informationWrapper);
informationWrapper.appendChild(informationText);
informationText.innerText = 'This Keyboard created for Windows. If you want to switch language please use SHIFT + ALT combination.';

//Add value to the textarea after click on buttons and some logic for caps and backspace

let previousButton;
let capsLock = false;

function onButtonClick(e) {
  const clickedButton = e.target;

  if (previousButton) {
    previousButton.classList.remove("keyboard-button--active");
  }
  previousButton = clickedButton;

  clickedButton.classList.add("keyboard-button--active");

  if (clickedButton.dataset[languageKey] === "CapsLock") {
    capsLock = !capsLock;
    return;
  } 

  let newValue = capsLock
    ? clickedButton.dataset[languageKey].toUpperCase()
    : clickedButton.dataset[languageKey].toLowerCase();

  textArea.value =
    clickedButton.dataset[languageKey] === "Backspace"
      ? textArea.value.slice(0, -1)
      : `${textArea.value}${newValue}`;
}

//After pressing Caps Lock, backspace etc.  change value on UI 

body.addEventListener('keydown', (e) => {
  e.preventDefault();
  const clickedButton = document.querySelector(`[data-key-code=${e.code}]`);

  if (previousButton) {
    previousButton.classList.remove("keyboard-button--active");
  }

  clickedButton.classList.add('keyboard-button--active');
  previousButton = clickedButton;

  if (clickedButton.dataset[languageKey] === "CapsLock")  {
    capsLock = !capsLock;
    return;
  }

  let newValue = capsLock
    ? clickedButton.dataset[languageKey].toUpperCase()
    : clickedButton.dataset[languageKey].toLowerCase();

  textArea.value =
    clickedButton.dataset[languageKey] === "Backspace"
      ? textArea.value.slice(0, -1)
      : `${textArea.value}${newValue}`;
})


//Change language after user press Shift + Alt

let isEnglish = true;
let languageKey = 'enValue';
let pressedButtons = {};


onkeydown = onkeyup  = function (event) {
  pressedButtons[event.keyCode] = event.type === "keydown";

  if (pressedButtons[18] && pressedButtons[16]) { 
    isEnglish = !isEnglish;
    languageKey = isEnglish ? "enValue" : "ruValue";
  }
}


