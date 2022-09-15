function billboard(name, price = 30){
    let letters = name.split('').length
    let finalPrice = 30
    while (letters > 0) {
        finalPrice = finalPrice+price;
        letters--;
        console.log(finalPrice)
    }
    return finalPrice-30
}

console.log(billboard("Jeong-Ho Aristotelis", price = 30))