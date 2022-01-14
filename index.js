

function clock() {    // main function
    var hours = document.getElementById("hours"); // new variable from hours storing the id from HTML
    var minutes = document.getElementById("minutes"); // new variable from minutes storing the id from HTML
    var seconds= document.getElementById("seconds");  // new variable from seconds storing the id from HTML
    var tz=document.getElementById("time5"); // new variable from timezone storing the id from HTML

    var time=new Date();  //function for real time
    var a=time.getHours(); // call the hours element from date object through time variable
    var b=time.getMinutes(); // call the min element from date object through time variable
    var c=time.getSeconds(); // call the sec element from date object through time variable

    hours.innerHTML=a;  // set the HTML fuction that we wants to render in our code 
    minutes.innerHTML=b;
    seconds.innerHTML=c;


}  
setInterval(clock,1000); //this method conntinues the calling of function until the windows is closed

function settime()   //onclick function for directed to the place
{
  var i= document.getElementById('wake').value; //get the value from user
  var hourr=new Date().getHours();

  if(i==hourr)
  {
    document.getElementsByClassName('lets').innerHTML='Testing';
  }





}