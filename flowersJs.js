
var guestAnswer;

var purshaseFlowers;
var flowersTypes;
var counter;

//alert("Flowers Website")
var guestName= prompt("Please enter your name ", "Guest")
document.write("<h2>Welcome " + guestName +" to our website</h2>" )



if ( guestAnswer=confirm("Are you a fan of roses?") == true)
{
 console.log(guestAnswer)
var color=prompt("Welcome, we hope you enjoy our site. Please enter your favorite color ", "pink")
document.body.style.background = color;
}
else
{
var color=prompt("Oh, we hope you'll change your mind after visiting our site. Please enter your favorite color ", "yellow")
document.body.style.background = color;

}
// loop lesson

purshaseFlowers= prompt("Do you want to purchase bouquet of flowers? yes/no ")

  while (purshaseFlowers!="yes")
  {
    purshaseFlowers= prompt("Do you want to purchase bouquet of flowers? yes/no ")

  }

flowersTypes = prompt("which type you want? pls write one from the following types : Alstroemeria | Amaryllis | Calla | Carnation | Chrysanthemum ")

if (flowersTypes !="Alstroemeria" && 
    flowersTypes !="Amaryllis" &&
    flowersTypes !="Calla" &&
    flowersTypes !="Carnation" &&
    flowersTypes !="Chrysanthemum" )
  {
flowersTypes = prompt("which type you want? pls write one from the following types : Alstroemeria | Amaryllis | Calla | Carnation | Chrysanthemum ")
    
  }
  else if (flowersTypes==null)
  {
    flowersTypes = prompt("which type you want? pls write one from the following types : Alstroemeria | Amaryllis | Calla | Carnation | Chrysanthemum ")
  }
  
 

  count = prompt("how many folwer you want in the bouquet?","1")
   document.write("The totaly numbers of "+flowersTypes+ " bouquet is "+count +"<br>")
    for(var i=1; i<=count; i++)
    {
     
      if(flowersTypes=="Alstroemeria")
      {
        document.write(i + "<img src='https://img.teleflora.com/image/upload/fl_lossy,f_auto,q_auto/flower-glossary/Alstroemeria.jpg' alt='Alstroemeria'>")
      }
      else if(flowersTypes=="Amaryllis")
      {
        document.write(i+"<img src='https://img.teleflora.com/image/upload/fl_lossy,f_auto,q_auto/flower-glossary/Amaryllis.jpg' alt='Amaryllis'>")
      }
      else if(flowersTypes=="Calla")
      {
        document.write(i + "<img src='https://img.teleflora.com/image/upload/v1478200121/flower-glossary/Calla.jpg' alt='Calla'>")
      }
      else if(flowersTypes=="Carnation")
      {
      document.write(i + "<img src='https://img.teleflora.com/image/upload/fl_lossy,f_auto,q_auto/flower-glossary/Carnation.jpg' alt='Carnation'>");
      }
      else if(flowersTypes=="Chrysanthemum")
      {
      document.write(i +"<img src='https://img.teleflora.com/image/upload/fl_lossy,f_auto,q_auto/flower-glossary/Chrysanthemum_mums.jpg' alt='Chrysanthemum (mum)'>" )
      }
    }

