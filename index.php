<html>
<head>
<script>
worker = new Worker('worker.js');
worker.onmessage = function(event){
  document.getElementById('mensajes').innerHTML += event.data + '<br />';
}
worker.postMessage("");
</script>
</head>
<body>
<div id="mensajes"></div>
</body>
</html>
