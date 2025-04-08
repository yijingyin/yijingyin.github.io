<!DOCTYPE html>
<html>
<head>

</head>
<body>
<?php include 'php/myLib.php';

$currentPath=__DIR__;
$weekNumber = extractFolderNumber($currentPath);

echo "<h1>This is work for Week " . $weekNumber . "</h1>";
?>



</body>
</html>