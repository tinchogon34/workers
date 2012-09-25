onmessage = function(event){init(event.data)}

function init(data)
{
//  values = new values();
  var min = 0;
  var max = 0;
  var g_w = new XMLHttpRequest();
  g_w.open("GET", "/index.json",true);
  g_w.send("");
  g_w.onreadystatechange = function()
  {
    if(g_w.readyState == 4)
    { 
      work = JSON.parse(g_w.responseText);
      min = work.min;
      max = work.max;
    }
  }
  setTimeout(function(){
    postMessage("Worker arrancado");
    calc(min,max);
  },1000);
 
}

function calc(min,max){
  var i;
  for(i = min;i<=max;i++){
    if(isPrime(i))
      postMessage(i);

  }
}

function isPrime(x){
  var i;
  for(i=2;i<=Math.sqrt(x);i++){
    if((x % i) == 0)
      return false;
  }
  return true;
}
