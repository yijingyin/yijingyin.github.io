<!DOCTYPE html>
<html>
<body>

<?php
$file = fopen("test.txt","r");
//Output lines until EOF is reached
while(! feof($file)) {
  $line = fgets($file);
  echo $line. "<br>";
}
fread($file,filesize("test.txt"));
fclose($file);
?>

<?php
$file = fopen("test.txt","w");
echo fwrite($file,"Hello World. Testing!");
fclose($file);
?>

<?php
echo file_exists("webdictionary.txt");
?>

<?php
print_r(glob("*.txt"));
?>

<?php
print_r(glob("*.*"));
?>

</body>
</html>