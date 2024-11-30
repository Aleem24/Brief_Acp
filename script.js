function myFunction(){
    let greeting;
    let time = new Date().getHours();

     if (time < 10 && time > 5) {
       greeting = "Good Morning!";
     } else if (time < 10 && time > 17) {
       greeting = "Good Afternoon!";
     } else if (time < 17 && time > 20) {
       greeting = "Good Evening!";
     } else {
       greeting = "Good Night!";
     }
     document.getElementById("hour").innerHTML = "Current time is:" + time;

     document.getElementById("greet").innerHTML = greeting;
}


let text ="";
let i = 0;

while(i < 5) {
  time += "<br>The  number is::" + i;
  i++;
}
document.getElementById("nasa").innerHTML = text;




