<!DOCTYPE html>
<html>

<head>
<?php 
$imagePath=(glob("./images/seasons/*"));
$imagePathNum=count($imagePath);
?>

</head>
<body>
<?php 
for($i=0;$i<$imagePathNum;$i++){
    echo "<img src='".$imagePath[$i]."'>";
}
?>

</body>
</html>