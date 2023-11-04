function  profit_loss_cal()
{
 var cost_price=document.getElementById('cp_value').value;
 var selling_price=document.getElementById('sp_value').value;
 if(selling_price>cost_price)
 {
 var profit=selling_price-cost_price;

 profit=(profit/cost_price*100);
  document.getElementsByClassName('result')[0].innerHTML="PROFIT IS "+profit+"%";
 }
 else if(selling_price<cost_price)
 {
     var loss= cost_price-selling_price;  
     loss=(loss/cost_price)*100;
     document.getElementsByClassName('result')[0].innerHTML="LOSS IS "+loss+"%";
 }
 else if(selling_price==cost_price)
 {
     document.getElementsByClassName('result')[0].innerHTML="No Profit and No loss";
 }
       
 
}