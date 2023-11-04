// here square function calculate the a+b ka hole sqaure
function square_(){
    var a=document.getElementById('number').value;
    
    var b=document.getElementById('number1').value;
    var result1=a*a-(-b*b)-(-2*a*b);
   // console.log(result1);
 document.getElementsByClassName('result')[0].innerHTML="Your a+b ka hole square is ="+"  "+result1;
    
  }
// here square function calcualte the a-b ka hole square 
  function square(){
      var a1=document.getElementById('number2').value;
      var b1=document.getElementById('number3').value;
      var result2=a1*a1-(-b1*b1)-2*a1*b1;
      document.getElementsByClassName('newvalue')[0].innerHTML="Your a-b ka hole square is ="+"  "+result2+"   ";
    }
    function sqrt()
    {
      var n;
      n=document.getElementById('number4').value;
      var  result3;
      result3=n*n;
      document.getElementsByClassName('valuestore')[0].innerHTML="SQUARE IS ="+"  "+result3;
    }
    function table()
    {
      var n1=document.getElementById('number5').value;
      var i;
      for(i=1;i<=10;i++)
      {
        n2=n1*i;
        document.getElementsByClassName('store')[0].innerHTML="YOUR TABLE IS "+"\n"+n2;
      }
    }