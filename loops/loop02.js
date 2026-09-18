let prices = [1000, 2000, 3000, 1500];
let table = document.getElementById("discountTable");
let i=0;
do{
    let discount = prices[i]*10/100;
    let dicountedPrice=prices[i]-discount;
    table.innerHTML+=`
    <tr>
    <td>${prices[i]}</td>
    <td>${dicountedPrice}</td>
    </tr>
    `;
    i++;
}while(i<prices.length);
