let passingerName = prompt("Enter the name: ")
let age = Number(prompt("Enter the age:"))
let distance = Number(prompt("ENter the distance"))
let busType = Number(prompt(`Enter the bus type 
    1.Normal Bus
    2.AC Bus
    3.Sleeper`))
let tickerFair;
let discount;
let finalFair;
switch (busType) {
    case 1:
        tickerFair=distance*2;
        break;
    case 2:
        tickerFair=distance*4;
        break;
    case 3:
        tickerFair=distance*5;
        break;
    default:
        busFair = "Unvalid"
        break;
}
if(busType==1){
    busType="Normal bus";
}
else if(busType==2){
    busType = "AC bus";
}
else if(busType ==3){
    busType="Sleeper";
}
else{
    busType="inavlid";
}
if(age<5){
    discount=tickerFair*0;
}
else if(age>=5&&age<=17){
    discount = tickerFair*50/100;
}
else if(age>=18&&age<=59){
    discount = 0;
}
else{
    discount = tickerFair*30/100;
}
finalFair = tickerFair-discount;
document.getElementById("bus").innerHTML = `<h1>Bus Ticket Reservation</h1>`+`Passenger Name: ${passingerName}<br>`+`Bus Type<br>`+`Ticket fair: ${tickerFair}<br>`+`Discount: ${discount}<br>`+`Final fare: ${finalFair}`