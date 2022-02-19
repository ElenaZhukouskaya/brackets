module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }
  let bracketsStr = bracketsConfig.join(",").split(",").join("");
  let brackets = [];
  for (let i = 0; i < bracketsStr.length; i += 2) {
    brackets.push(bracketsStr.slice(i, i + 2));
  }
  for (let i = 0; i < brackets.length; i++) {
    if (str.includes(brackets[i])) {
      str = str.replace(brackets[i], "");
      i = -1;
    }
  }
  return str.length === 0;
};
