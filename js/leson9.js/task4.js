const formatString = function(string) {
    if (string.length < 40) {
        return string;
    }
    else {
        return string.slice(0 , 40) + '...';
    }
}

console.log(formatString("Hello World!"))
console.log(formatString("Це довгий рядок , та має  більше ніж 40 символів"))