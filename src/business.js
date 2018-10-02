var symbols = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M","S"];
var values = [1,4,5,9,10,40,50,90,100,400,500,900,1000,5000];

export function romanNumerals(userInput) {
  var numerals = "";
  if ((userInput < 1) || (userInput > 3999)) {
    alert("Please enter whole numbers between 1 and 3,999");
    return false;
  } else if (Number.isNaN(userInput)) {
    alert("Please enter a number");
    return false;
  } else {
    while (userInput > 0) {
      for (var i = 0; i < values.length; i++) {
        if (userInput < values[i]) {
          numerals += symbols[i-1];
          userInput -= values[i-1];
          break;
        }
      }
    } return numerals;
  }
}
