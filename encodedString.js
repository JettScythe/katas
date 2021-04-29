const urlEncode = function(text) {
  let newStr = "";
  for (let i = 0; i < text.length; i++) {
    if (i != 0 && (i != text.length - 1) && text[i] === " ") {
      newStr += "%20";
    } else {
      newStr += text[i];
    }
  }
  return newStr;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));