let prices = [200, 750, 450, 1200, 500, 800];

function customFilter(array, callback) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
}

function isPremium(price) {
    return price > 500;
}

function showPremiumPrices() {
    let premiumPrices = customFilter(prices, isPremium);

    document.getElementById("result").innerHTML =
        premiumPrices.join("<br>");
}