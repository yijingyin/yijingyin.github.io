<html>
<body>

Welcome <?php echo $_POST["name"]; ?><br>
Your Password is: <?php echo $_POST["password"]; ?>

<?php

$name = $_POST["name"];
$password = ($_POST["password"]);

$filePath = "../output/users.txt";
// $userinfos = array("Name: ". $name. "  ". "Password: ". $password);
// $userNUM = count($userinfos);
// for ($i=0; $i<$userNUM;$i++){array_push($userinfos,"Name: ". $name. "  ". "Password: ". $password);}
// echo json_encode($userinfos);

$file = fopen($filePath,"a");
fwrite($file,"Name: ". $name. "  ". "Password: ". $password. "\n");
fclose($file);
?>
</body>
</html>