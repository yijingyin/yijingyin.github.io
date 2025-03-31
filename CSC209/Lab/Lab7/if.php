<!DOCTYPE html>
<html>
<body>

<?php
if (5 > 3) {
  echo "Have a good day!";
}
?>
 
 <?php
$t = 14;

if ($t < 20) {
  echo "Have a good day!";
}
?>

<?php
$t = 14;

if ($t == 14) {
  echo "Have a good day!";
}
?> 

<?php
$a = 200;
$b = 33;
$c = 500;

if ($a > $b && $a < $c ) {
  echo "Both conditions are true";
}
?>

<?php
$a = 5;

if ($a == 2 || $a == 3 || $a == 4 || $a == 5 || $a == 6 || $a == 7) {
  echo "$a is a number between 2 and 7";
}
?> 

</body>
</html>
