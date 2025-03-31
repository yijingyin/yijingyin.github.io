<!DOCTYPE html>
<html>
<body>

<?php
$x = 5;      // $x is an integer
$y = "John"; // $y is a string

echo $x;
echo $y;
var_dump($x);
?>

<pre>

<?php
var_dump(5);
var_dump("John");
var_dump(3.14);
var_dump(true);
var_dump([2, 3, 56]);
var_dump(NULL);
?>

</pre>

<?php
function myTest() {
  static $z = 0;
  echo $z;
  $z++;
}

myTest();
echo "<br>";
myTest();
echo "<br>";
myTest();
?> 
</body>
</html>
