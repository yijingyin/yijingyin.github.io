<html>
<body>

Welcome <?php echo $_POST["name"]; ?><br>
Your Password is: <?php echo $_POST["password"]; ?>

<?php
$name = $_POST["name"];
$password = ($_POST["password"]);
$filePath = "../output/users.txt";
$file = fopen($filePath,"w");
fwrite($file,"Name: ". $name."\n");

fwrite($file,"Password: ". $password);
fclose($file);
?>
</body>
</html>