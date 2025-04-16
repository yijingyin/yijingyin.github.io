<html>
<head>
<link rel="stylesheet" href="../css/action_page.css">
</head>
<body>
<div class="welcome-container">
    <h1>Login Successful! 🎉</h1>
    
    <div class="info-box">
        <div class="info-item">
            <strong>Username:</strong>
            <span style="color: #2e7d32;"><?php echo htmlspecialchars($_POST["uname"]); ?></span>
        </div>
        
        <div class="info-item">
            <strong>Password:</strong>
            <span style="color: #d32f2f;"><?php echo htmlspecialchars($_POST["psw"]); ?></span>
        </div>
</div>
<?php
    $name = $_POST["uname"];
    $psw = $_POST["psw"];
    $filePath = "../output/users.txt";
    $file = fopen($filePath, "a");
    
    if ($file) {
        fwrite($file, "Name: ". $name. "     ". "Password: ". $psw. "\n");
        fclose($file);
        echo '<div class="success-message">Data successfully saved to file!</div>';
    } else {
        echo '<div class="success-message" style="background: #fce8e6; color: #c5221f;">Error saving data to file!</div>';
    }
    ?>
    <a href="javascript:history.back()" class="back-link">← Back to Login</a>
    </div>
</body>
</html>