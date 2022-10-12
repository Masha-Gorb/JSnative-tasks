function search(budget, prices) {
    return prices.filter(f => f < budget || f === budget).sort((a, b) => a - b).toString()
}