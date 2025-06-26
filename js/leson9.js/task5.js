const checkForSpam = function(message) {
    let lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('spam', 'sale')) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkForSpam(message))