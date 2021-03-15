module.exports = function check(str, bracketsConfig) {
  let firstPrimer = bracketsConfig[0];
  let stec = [];
  brackets = str.split("");

  stec.push(brackets[0]);
  stec.push(brackets[1]);
  if ((stec[stec.length - 2] == firstPrimer[0]) && stec[stec.length - 1] == firstPrimer[1]) {
    stec.pop();
    stec.pop();
    return true;
  } else {
    return false;
  }
}