const getHiddenCard = (cardNumber, starsCount = 4) => {
    const lastNumber = cardNumber.slice(-4);
    const stars = '*'.repeat(starsCount);
    return `${stars}${lastNumber}`;
};

console.log(getHiddenCard('1234567812345678', 2))