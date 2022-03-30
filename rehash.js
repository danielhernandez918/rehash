/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/

const str1 = "b70a164c32a20c10"; // b:70 a:164 c:32 a:20 
const expected1 = "a184b70c42"; //{a:184, b:70, c:42}
// a184b70c42
// isNaN(letter)
  //given an incorrectly string by combining letter  count occurences
  // return the correctly rehashed string alphabetized.
function rehash(s) {
    const result = {};
    const workArr = s.split("");
    let buildNum = "";
    let buildKey = "";

    for (let i = 0; i < workArr.length; i++) {
        if (isNaN(workArr[i])) {  //isNaN checks if i is not a number
            if (buildNum !== "") {
                result[buildKey] += parseInt(buildNum); //result[buildkey] looks for letter in dictionary to increase
                // console.log(result[buildKey])
                buildNum = "";
            }
            if (result.hasOwnProperty(workArr[i])) {
                buildKey = workArr[i];
                // console.log(buildKey)
            } else {
                buildKey = workArr[i];
                result[workArr[i]] = 0;
                // console.log(result[letter]);
            }
        } else {
            buildNum += workArr[i]
            // console.log(buildNum)
        }
    }
    if (buildNum !== "") {
        result[buildKey] += parseInt(buildNum);
    }
    return Object.keys(result).sort().reduce((r, k) => (r[k] = result[k], r), {});
}

console.log(rehash(str1))

// without making dictionary
function rehash(s) {
    const result = {};
    let buildNum = "";
    let buildKey = "";

    for (letter of s) {
        if (isNaN(letter)) {  //isNaN checks if i is not a number
            if (buildNum !== "") {
                result[buildKey] += parseInt(buildNum); //result[buildkey] looks for letter in dictionary to increase
                // console.log(result[buildKey])
                buildNum = "";
            }
            if (result.hasOwnProperty(letter)) {
                buildKey = letter;
                // console.log(buildKey)
            } else {
                buildKey = letter;
                result[letter] = 0;
                // console.log(result[letter]);
            }
        } else {
            buildNum += letter;
            // console.log(buildNum)
        }
    }
    if (buildNum !== "") {
        result[buildKey] += parseInt(buildNum);
    }
    return Object.keys(result).sort().reduce((r, k) => (r[k] = result[k], r), {});
}

console.log(rehash(str1))