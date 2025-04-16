<!DOCTYPE HTML>
<html>  
<body>
<?php include 'php/myLib.php';

$currentPath=__DIR__;

$weekNumber = extractFolderNumber($currentPath);

echo "<h1>This is work for Week " . $weekNumber . "</h1>";
?>

<form action="php/saveUsers.php" method="post">
Name: <input type="text" name="name"><br>
Password: <input type="text" name="password"><br>
<input type="submit">
</form>



</body>
</html>