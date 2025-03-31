<!DOCTYPE html>
<html>
<body>

<?php
$x = "Hello World!";
echo strtoupper($x);
echo "<br>";
echo strtolower($x);
echo "<br>";
echo str_replace("World", "Dolly", $x);
echo "<br>";
echo strrev($x);
echo "<br>";
echo trim($x);
echo "<br>";
$y = explode(" ", $x);

//Use the print_r() function to display the result:
print_r($y);
echo "<br>";
?> 

<?php
$x = "Hello";
$y = "World";
$z = $x . " " . $y;
echo $z;
echo "<br>";
?>

<?php
$x = "Hello";
$y = "World";
$z = "$x $y";
echo $z;
?>


<?php
$x = "Hello World!";
echo substr($x, 6, 5);
?> 

<?php
$x = "Hello World!";
echo substr($x, 6);
?> 

<?php
$x = "Hello World!";
echo substr($x, -5, 3);
?> 

<?php
$x = "Hi, how are you?";
echo substr($x, 5, -3);
?> 

<?php
$x = "We are the so-called \"Vikings\" from the north.";
echo $x;
?> 
</body>
</html>
