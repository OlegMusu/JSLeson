const calculateEngraviingPrice = function(message, pricePerWord) {
    let wordsArr = message.split(" ");
    // console.log(wordsArr)
    let result = wordsArr.length * pricePerWord;
    return result;
};

console.log(calculateEngraviingPrice('hello world', 50))