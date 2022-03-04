

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

// Till avobe the Code is for render the live time


// function settime()   //onclick function for directed to the place
// {
//   var i= document.getElementById('wake').value; //get the value from user
//   var hourr=new Date().getHours();

//   if(i==hourr)
//   {
//     document.getElementsByClassName('lets').innerHTML='Testing';
//   }


//  }


function setTime()
{
  var i = document.getElementById("wake").value;
  var hou_r = new Date().getHours();

    console.log(i,'i');
    console.log(hou_r,'hou_r');

  if(Number(i)== hou_r)
  {
    document.getElementsByClassName('lets').innerText="Wake Up time";
    document.getElementsByClassName('good').innerHTML="Good Morning";

   


    // const div=document.createElement("h5")
    // div.innerText = "Wake up time";
  }
}