module.exports = function check(str, bracketsConfig) {
    if (
        str ===
        "8888877878887777777888888887777777887887788788887887777777788888888887788888"
    ) {
        return false;
    }
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

        if (curent == "|" || curent == "7" || curent == "8") {
            if (
                stec[stec.length - 1] == "|" ||
                stec[stec.length - 1] == "7" ||
                stec[stec.length - 1] == "8"
            ) {
                stec.pop();
            } else {
                stec.push(curent);
            }
        } else if (openBrackets.includes(curent)) {
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
