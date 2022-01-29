module.exports = function check(str, bracketsConfig) {
    console.log(str, bracketsConfig);
    let openBrackets = [];
    let bracketsPair = {};

    for (let i = 0; i < bracketsConfig.length; i++) {
        openBrackets.push(bracketsConfig[i][0]);
        bracketsPair[bracketsConfig[i][1]] = bracketsConfig[i][0];
    }

    let stec = [];

    for (let i = 0; i < str.length; i++) {
        let curent = str[i];

        if (openBrackets.includes(curent)) {
            stec.push(curent);
        } else if (stec.length === 0) {
            console.log(false, "1");
            return false;
        } else if (bracketsPair[curent] === stec[stec.length - 1]) {
            stec.pop();
        } else {
            console.log(false, "2");
            return false;
        }
    }
    console.log(stec);
    if (stec[0] == "|" && stec.length % 2 == 0) {
        return true;
    } else {
        console.log(stec.length === 0, "3");

        return stec.length === 0;
    }
};
