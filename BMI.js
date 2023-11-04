function BMI()
{
    var height,weight,bmi;
    height=document.getElementById('number_height').value;
  
    weight=document.getElementById('number_weight').value;
 


    height /=100;
    height *=height;
    bmi=weight/height;
    bmi=bmi.toFixed(1);
    if(bmi<=18.4)
    {
        document.getElementsByClassName('result')[0].innerHTML="Your BMI is"+bmi +"Which means "+"  "+"You are underweight";
        
    }
    else if(bmi>=18.5 && bmi<=24.9)
    
    {
        document.getElementsByClassName('result')[0].innerHTML ="Your BMI is "+bmi+"Which means"+"  "+ "You are Normal"
    }
    else if(bmi>=25 && bmi<=29.9)
    {
        document.getElementsByClassName('result')[0].innerHTML="your BMI is "+bmi+"Which means "+"  "+"You are Overweight";
    }
    else if(bmi>=30)
    {
        document.getElementsByClassName('result')[0].innerHTML="Your BMI is"+bmi+"Which means"+"  "+"You are Obese";
    }
    if(weight==0)
    {
        document.getElementById("result")[0].innerHTML=error;

    }
    else if(height==0)
    {
        document.getElementById("result")[0].innerHTML=error;
    }
    /*
    else{
        document.getElementById("results").innerHTML=measure;
    }
    */
    if(weight<0)
    {
        document.getElementById("result")[0].innerHTML="Negatice Values not Allowed";
    }
 }
