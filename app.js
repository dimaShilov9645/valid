let btn = document.getElementById("btn");

function isValid() {
  const text = document.getElementById("text-input").value;
  if (!text.length) return alert("Введите выражение");
  var chars = text.split(''),
      stack = [],
      open = ['{', '(', '['],
      close = ['}', ')', ']'],
      closeIndex,
      openIndex;
  for (var i = 0, len = chars.length; i < len; i++) {
    openIndex = open.indexOf(chars[i]);
    closeIndex = close.indexOf(chars[i]);
    if (openIndex !== -1) {
      stack.push(openIndex);
    }
    if (closeIndex !== -1) {
      openIndex = stack.pop();
      if (closeIndex !== openIndex) {
        return alert("Выражение не валидно");
      }
    }
  }
  
  if (stack.length !== 0) {
    return alert("Выражение не валидно");
  }
  if (openIndex === -1 && closeIndex === -1) {
    return alert("Введите скобки")
  }
  return alert("Выражение валидно");
}

btn.addEventListener("click", isValid, false);

