let customeName=prompt("Enter the name:")
let age=Number(prompt("Enter the age:"))
let tickets=Number(prompt("Enter number of tickets"))
let bookingDay=Number(prompt(`Booking day
    1.Monday
    2.Tuesday
    3.Wednesday
    4.Thrusday
    5.Friday
    6.Saturday
    7.Sunday`))
let ticketPrice;
let discount;
let finalAmount;
if(age<5){
    ticketPrice=0;
}
else if(age>=5&&age<=17){
    ticketPrice=100;
}
else if(age>=18&&age<=59){
    ticketPrice=200;
}
else{
    ticketPrice=120;
}
ticketPrice=ticketPrice*tickets;
if(bookingDay==1){
    discount=ticketPrice*10/100;
}
else if(bookingDay==2){
    discount=ticketPrice*5/100;
}
else if(bookingDay==3){
    discount=ticketPrice*5/100;
}
else if(bookingDay==4){
    discount=ticketPrice*5/100;
}
else if(bookingDay==5){
    discount=ticketPrice*5/100;
}
else if(bookingDay==6){
    discount=ticketPrice*0/100;
}
else{
    discount=ticketPrice*0/100;
}
finalAmount=ticketPrice-discount;
document.getElementById("movie").innerHTML=`<h1>Movie Ticket Booking</h1>`+`Customer Name:${customeName}<br>`+`Ticket Price:${ticketPrice}<br>`+`Discount:${discount}<br>`+`Final Amount:${finalAmount}`;