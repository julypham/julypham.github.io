/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
   function init() {
    console.log("Window loaded!");
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    let encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleClick);

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", reset)

    let textSizeButton = document.querySelectorAll('input[name="text-size"]');
    textSizeButton.forEach(elem => { elem.addEventListener("change", setTextSize); });

    let textCapsButton = document.getElementById('all-caps');
    textCapsButton.addEventListener("click", setTextCaps);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function handleClick() {
    console.log("Button clicked!");
    let inputText = document.getElementById("input-text");
    let result = shiftCipher(inputText);
    document.getElementById("result").textContent = result;
  }

  /**
 * Returns an encrypted version of the given text, where
 * each letter is shifted alphabetically ahead by 1 letter,
 * and 'z' is shifted to 'a' (creating an alphabetical cycle).
 */
  function shiftCipher(text) {
    text = text.value.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

  function reset() {
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
  }

  function setTextSize() {
    let text = document.getElementById("input-text");
    text.style.fontSize = document.querySelector('input[name="text-size"]:checked').value;
  }

  function setTextCaps() {
    let text = document.getElementById("input-text");
    text.style.textTransform = (document.getElementById('all-caps').checked) ? 'uppercase' : 'none';
  }
})();
