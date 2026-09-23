//task1
function welcomeMessage() {
    document.getElementById("task1").innerText = "Welcome to Our Restaurant";
}

welcomeMessage();

//task2
function customerName(name) {
    document.getElementById("task2").innerHTML = `hello,${name}`;
}
customerName("Shiva")

//task3
function squreOfNmuber(number) {
    let result = number * number;
    document.getElementById("task3").innerText = `Squre of the number:${result}`
}
squreOfNmuber(5)


//task4
function products(name,price="100"){
    document.getElementById("task4").innerHTML =`Product name:${name}<br>`+`Price:${price}`;
}
products("TAB")


//task5
function userName(name="Guest"){
    document.getElementById("task5").innerText=`hello ${name}`;
}
userName("Shiva")


//task6
function bill(itemName,qunatity,price){
    let total=qunatity*price;
    document.getElementById("task6").innerHTML=`Item:${itemName}<br>Qunatity:${qunatity}<br>Price:${price}<br>Total:${total}`;
}
bill("Burger",2,300)

//task7
function showMenu(itemName,price){
      document.getElementById("task7").innerHTML =
        `Item: ${itemName}<br>Price: ${price}`;
}

//task8
function smart(amount,discountPercentage="10"){
    let finalAmount=amount-amount*discountPercentage/100;
    document.getElementById("task8").innerText=`Final Amount:${finalAmount}`;
}
smart(2000,20)


//task9
function card(cName,itemName,qunatity,pricePerItem){
    let total=qunatity*pricePerItem;
    document.getElementById("task9").innerHTML=`<h1>Customer Name:${cName}</h1>`+`Item Name:${itemName}<br>Qunatity:${qunatity}<br>Price per item:${pricePerItem}<br>Total:${total}`;
}
card("Shiva","Laptop",2,40000)


//task10
let quantity = 1;
let price = 500;

function updateQuantity(change) {
    quantity = quantity + change;

    if (quantity < 1) {
        quantity = 1;
    }

    let total = quantity * price;

    document.getElementById("task10").innerHTML =
        `Quantity: ${quantity}<br>
         Price: ${price}<br>
         Total: ${total}<br>
         <button onclick="updateQuantity(1)">+</button>
         <button onclick="updateQuantity(-1)">-</button>`;
}