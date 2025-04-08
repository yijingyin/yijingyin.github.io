<!DOCTYPE html>
<html>
<head>
<?php
$filePath = realpath("whereami.php");
echo $filePath."<br>";

$weekName= basename(__DIR__);
echo $weekName."<br>";

$weekNrString= substr($weekName, -1);
echo $weekNrString."<br>";

$weekNr = (int)$weekNrString;

echo "My week number is " . $weekNr;


?>
</head>
<body>
<p>This page figures out its whereabouts</p>

</body>
</html>