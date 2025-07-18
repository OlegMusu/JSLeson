function repeatMessage(times, messageCreator) {
    for (let i = 0; i < times;) {
        messageCreator(i)
    }
};