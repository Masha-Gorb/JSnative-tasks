//дается массив чисел-цен, надо пропустить в массив те, которые меньше или равны бюджету
function search(budget, prices) {
    return prices.filter(f => f < budget || f === budget).sort((a, b) => a - b).toString()
}