let number=1;
function highlightingNumber(){
    document.getElementById("number").innerText=number;
    if(number<10){
        number++;
        setTimeout(highlightingNumber,1000);
    }
}
highlightingNumber();