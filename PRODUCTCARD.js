//TASK 3
//чтобы получить читаемый объект из JSON используем метод JSON.parse() и результат кладем в переменную data

const data = {
    items: [
        {id: 1, name: 'мяч', price: 3600, discount: 10,},
        {id: 2, name: 'футболка', price: 1200, discount: 15,},
        {id: 3, name: 'ракетка', price: 300, discount: 20,},
    ],

    discounts: [
        {id: 1, name: 'весенняя распродажа', discount: 20},
        {id: 2, name: 'новогодние скидки', discount: 25},
        {id: 3, name: 'черная пятница', discount: 10}
    ],

    totalDiscounts: [
        {id: 1, minPrice: 1000, discount: 5},
        {id: 1, minPrice: 5000, discount: 6},
        {id: 1, minPrice: 28000, discount: 35},
        {id: 1, minPrice: 27000, discount: 10},
    ],

    purchases: [ // сколько каких товаров покупает клиент
        {item: 1, amount: 10},
        {item: 2, amount: 5},
        {item: 3, amount: 3},
    ],

    itemsDiscounts: [ // на какие товары какие скидки должны действовать
        {itemId: 1, discountId: 1},
        {itemId: 2, discountId: 1},
        {itemId: 2, discountId: 2},
        {itemId: 2, discountId: 3},
        {itemId: 3, discountId: 3},
    ]
}


const items = data.items; //товары - айди, цена, личная скидка
const discounts = data.discounts; //виды скидок на товар
const totalDiscount = data.totalDiscounts; //скидки на всю корзину
const itemsDiscounts = data.itemsDiscounts; //товар id и применяемая скидка id
const purchases = data.purchases; //товары в корзине (какие и сколько)


//вычисляем цену всех товаров одного типа (кол-во умножить на цену 1шт)
//итог: товары в корзине с полной стоимостью
function filterPurchase(allItems, cartItems) {
    const products = []
    for (let i = 0; i < cartItems.length; i++) {
        if (allItems[i].id === cartItems[i].item) {
            products.push({...allItems[i], amount: cartItems[i].amount})
        }
    }
    return products.map(m => m = {...m, discount: m.discount, cost: m.price * m.amount})
}

const productsInCartWithAllCost = filterPurchase(items, purchases);

//вычисляем сумму скидок для каждого товара в корзине
//итог: товары в корзине с полной стоимостью и суммой скидок
function addAdditionalDiscount(allDiscounts, cartDiscounts, productsInCart) {
    //айди скидки поменять на значение
    const cartDisc = [];
    for (let i = 0; i < cartDiscounts.length; i++) {
        const thisDiscId = cartDiscounts[i].discountId;
        const thisDiscValue = allDiscounts.find(f => f.id === thisDiscId).discount
        cartDisc.push({...cartDiscounts[i], discountValue: thisDiscValue})
    }

    //айди товара и сумма сезонных скидок
    let result = cartDisc.reduce((a, c) => (a[c.itemId] = (a[c.itemId] || 0) + c.discountValue, a), {});
    let resArr = Object.entries(result)

    let productsInCartWithAllCostAndAllDiscounts = []
    for (let i = 0; i < productsInCart.length; i++) {
        let discId = Number(resArr[i][0]);
        let discValue = resArr[i][1];

        if (productsInCart[i].id === discId) {
            let sumDisc = productsInCart[i].discount + discValue;
            productsInCartWithAllCostAndAllDiscounts.push(
                {
                    id: productsInCart[i].id,
                    finalDiscount: sumDisc,
                    cost: productsInCart[i].cost,
                    name: productsInCart[i].name,
                    amount: productsInCart[i].amount
                })
        }
    }
    return productsInCartWithAllCostAndAllDiscounts
}

const productsInCartWithAllCostAndAllDiscounts = addAdditionalDiscount(discounts, itemsDiscounts, productsInCartWithAllCost)

//считаем корзину со стоимостью с учетом скидок
const productsInCartWithFinalCost = productsInCartWithAllCostAndAllDiscounts.map(m => m = {
    ...m,
    finalCost: m.cost - (m.cost / 100 * m.finalDiscount)
})


//считаем сумму корзины
function cartSumFoo(productsInCart) {
    return productsInCart.reduce((a, b) => a + b.finalCost, 0)
}

const cartSum = cartSumFoo(productsInCartWithFinalCost)

function cartWithFinalDiscount(sum, cartDiscounts) {
    let finalDiscArr = []
    for (let i = 0; i < cartDiscounts.length; i++) {
        if (sum > cartDiscounts[i].minPrice) {
            finalDiscArr.push(cartDiscounts[i].discount)
        }
    }

    const finalDisc = Math.max.apply(null, finalDiscArr);
    return sum - (sum / 100 * finalDisc)
}

const cartSumWithFinalDiscountValue = cartWithFinalDiscount(cartSum, totalDiscount)

function resultLog(arr) {
    arr.map(m => {
        console.log(`${m.name}, ${m.amount}шт, скидка: ${m.finalDiscount}%,  финальная цена: ${m.finalCost} (цена без скидки: ${m.cost})`)
    })
}

resultLog(productsInCartWithFinalCost)
console.log(`Сумма корзины без скидки: ${cartSum} руб`)
console.log(`Итоговая сумма корзины: ${cartSumWithFinalDiscountValue} руб`)


