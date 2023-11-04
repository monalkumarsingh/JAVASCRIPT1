function simple_intrest(){
    var principle_amount=document.getElementById('number').value;
    var rate=document.getElementById('number1').value;
    var month=document.getElementById('number2').value;
   var simpleInterest=principle_amount*rate*month/100
   document.getElementsByClassName('result')[0].innerHTML="SIMPLE INTEREST IS"+"  "+simpleInterest;

}
