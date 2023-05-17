//сумма заказа
// function sumOfAllPurchase (purchase) {
//     const itemPrice = items[0].id
//     console.log(itemPrice)
//     const price = purchase.map(m => m.item = items.price)
//     return 0
// }
//
// console.log(sumOfAllPurchase(purchases))

//сложить одинаковые значение по айдишке

const concatItemsAndPurchase = items.concat(purchases);
console.log(concatItemsAndPurchase)
let testSameIdArr = [
    {idBox: "15", id: 13, price: 8805},
    {idBox: "6", id: 14, price: 4467},
    {idBox: "6", id: 15, price: 18853},
    {idBox: "7", id: 16, price: 5649},
    {idBox: "7", id: 17, price: 3645},
    {idBox: "7", id: 18, price: 2505},
    {idBox: "7", id: 19, price: 4397},
    {idBox: "8", id: 20, price: 5548},
    {idBox: "8", id: 21, price: 3645},
    {idBox: "8", id: 22, price: 3645}
]

let result = concatItemsAndPurchase.reduce((a,c) => (a[c.id] = (a[c.id] || 0) + c.price*c.amount, a), {});
console.log(result);

//склеить массивы
// const result = purchases.map(item2 => {
//     // отфильтровали массив 1 на наличие элементов с соответствующим id
//     const withCurrentId = items.filter(item1 => item1['id'] === item2['item']);
//     console.log('hhhh ' + withCurrentId[1].name)
//
//     // склеили новый объект с суммами свойств
//     const item1 = withCurrentId.reduce((acc, curr) => {
//         // если в аккумуляторе нет свойства page_views, то 0, потом суммируем
//         console.log('wtf ' + acc['price'])
//
//         acc['price'] = (acc['price'] || 0) + curr['price'];
//
//         // если в аккумуляторе нет свойства clicks, то 0, потом суммируем
//         // acc['clicks'] = (acc['clicks'] || 0) + curr['clicks'];
//
//         return acc;
//     }, {});
//
//     return { ...item2, ...item1 };
// });
//
//
// console.log('склеиваем пурчейз и айтемы: ' + JSON.stringify(result));


//найти какие скидки применяются к каким товарам
//принимает массив товаров и массив скидок

// function discountsForEachItem (discountsArr, itemsArr, itemsDiscountsArr) {
//
//     const itemIdAndDiscSum = [];
//     for(let i = 0; i < itemsDiscountsArr.length; i++) {
//
//         const discountId = itemsDiscountsArr[i].discountId;
//         const itemId = itemsDiscountsArr[i].itemId;
//         const thisDisc = discountsArr.find(f => f.id === discountId).discount.slice(0, -1);
//         const thisItemId = itemsArr.find(f => f.id === itemId).id;
//         const thisItemDisc = itemsArr.find(f => f.id === thisItemId).discount.slice(0, -1);
//         const sumDisc = Number(thisItemDisc) + Number(thisDisc);
//         itemIdAndDiscSum.push( {itemId:thisItemId, sumDisc: sumDisc })
//
//         // const newTestRes = itemIdAndDiscSum.map((item) => (
//         //     item.id === thisItemId
//         //         ? { ...item, discount: sumDisc }
//         //         : item
//         // ));
//
//
//         // console.log(i + 'элемент: скидка ' + thisDisc)
//         // console.log(i + 'элемент: айди товара ' + thisItemId)
//         console.log(i + 'элемент: скидка товара ' + thisItemDisc)
//         console.log(i + 'элемент: сумма скидок ' + sumDisc)
//         // console.log(i + 'элемент: новый массив ' + itemIdAndDiscSum)
//         console.log(itemIdAndDiscSum)
//         console.log('конец прогона')
//     }
//
//
//     // return thisDisc
// }
//
// console.log(discountsForEachItem(discounts, items, itemsDiscounts))


