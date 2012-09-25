<html>
<head>
<script>
worker = new Worker('http://www.andlabs.org/tools/ravan/ravan_worker.js');
worker.onmessage = function(event){
    document.getElementById('mensajes').innerHTML += event.data + '<br />';
}
worker.postMessage(3770);
</script>
</head>
<body>
<div id="mensajes"></div>
</body>
</html>

