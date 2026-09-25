function calculateDiscount(price, discount = 10) {
    let discountAmount = price * discount / 100;
    let finalPrice = price - discountAmount;

    return finalPrice;
}

let result = calculateDiscount(20000, 20);

document.getElementById("result").innerText = `Final Price: ₹${result}`;