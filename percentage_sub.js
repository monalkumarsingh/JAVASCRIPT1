function sub_percent()
{
    let  sum,percentage;
let  sub1,sub2,sub3,sub4,sub5;
    sub1=document.getElementById('number1').value;
    sub2=document.getElementById('number2').value;
    sub3=document.getElementById('number3').value;
    sub4=document.getElementById('number4').value;
    sub5=document.getElementById('number5').value;
    sum=sub1-(-sub2)-(-sub3)-(-sub4)-(-sub5);
    percentage=(sum/500)*100;
   // console.log(sum);
    document.getElementsByClassName('result')[0].innerHTML="your marks percentage is = "+"   "+percentage+"%";
}