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