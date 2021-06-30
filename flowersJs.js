
var guestAnswer;
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