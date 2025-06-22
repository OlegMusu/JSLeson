

const findLongestWord = function(string) {
    let wordsArr = string.split(" ");
    let longestWord = "";
    for (let word of wordsArr) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLongestWord)