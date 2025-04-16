<!DOCTYPE html>
<html>
<body>

<div id="demo">
<button type="button" onclick="loadDoc()">Get User Info</button>
</div>

<script>
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "./output/users.txt");
  xhttp.send();
}
</script>

</body>
</html>
