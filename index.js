function number()
{
    // class name or id name same hona chaiye 
    var intger_value=document.getElementById('number').value;
     if(intger_value>0)
     {
        document.getElementsByClassName('number')[0].innerHTML=" Given number  is positive "
     }
     if(intger_value<0)
     {
        document.getElementsByClassName('number')[0].innerHTML="Given  number  is negative"
     }
     if(intger_value==0)
     {
        document.getElementsByClassName('number')[0].innerHTML="Given number is zero "
     }
}


function evenNumber()
{
    var intger_value1=document.getElementById('evenNumber').value;
     if(intger_value1%2==0)
     {
        document.getElementsByClassName('evenNumber')[0].innerHTML="Even number ";
     }
     if(intger_value1%2==1)
     {
        document.getElementsByClassName('evenNumber')[0].innerHTML="Odd number";
     }
   
}

function vowel()
{
    var string=document.getElementById('vowel_check').value;
    if(string=='a')
    {
        document.getElementsByClassName('vowel_check')[0].innerHTML="vowel";
    }
    else if(string=='e')
    {
        document.getElementsByClassName('vowel_check')[0].innerHTML="vowel";   
    }
    else if(string=='i')
    {
        document.getElementsByClassName('vowel_check')[0].innerHTML="vowel";   
    }
    else if(string=='o')
    {
        document.getElementsByClassName('vowel_check')[0].innerHTML="vowel";   
    }
    else if(string=='u')
    {
        document.getElementsByClassName('vowel_check')[0].innerHTML="vowel";   
    }
    else{
        document.getElementsByClassName('vowel_check')[0].innerHTML="consonant";   
    }
    
}