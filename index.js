function clock()
{
  var hours=document.getElementsById("hours");
  var minutes=document.getElementsById("min");
  var seconds=document.getElementsById("sec");
  var tz=document.getElementsById("time5");

  var time=new Date();
  var a=time.getHours();
  var b=time.getMinutes();
  var c=time.getSeconds();

  hours.innerHTML=a;
  minutes.innerHTML=b;
  seconds.innerHTML=c;


}

setInterval(clock,1000);