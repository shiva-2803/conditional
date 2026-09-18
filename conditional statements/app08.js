let mobileNumber = prompt("Enter mobile number:");
if(mobileNumber<=9999999999){
    let rechargeAmount = Number(prompt("Enter recharge amount:"));
    let activatedBenifits ;
    let gst;
    let finalAmount;
    if(rechargeAmount>=10000){
        activatedBenifits="Unlimited Data + Unlimited Calls";
    }
    else if(rechargeAmount>=500){
        activatedBenifits=" 2GB/day + Unlimited Calls";
    }
    else if(rechargeAmount>=200){
        activatedBenifits = "1GB/day + 100 Calls/day";
    }
    else{
        activatedBenifits = "Basic plan";
    }
    gst=rechargeAmount*18/100;
    finalAmount=rechargeAmount+gst;

    document.getElementById("mobile").innerHTML=`<h1>Mobile Recharge Application</h1>`+`Mobile Number :${mobileNumber}<br>`+`Recharge Amount :${rechargeAmount}<br>`+`Activated Benefits :${activatedBenifits}<br>`+`GST :${gst}<br>`+`Final Amount :${finalAmount}`;
}
else{
    document.getElementById("mobile").innerHTML=`Invalid Number`
}