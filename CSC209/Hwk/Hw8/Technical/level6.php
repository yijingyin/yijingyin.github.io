<?php 
session_start();



?>

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="css/technical.css">
    <?php include 'php/level6.php';?>
</head>
<body>
    <form method="post">
        <div class="slideshow-container">
            <?php renderSlides($imageFiles, $captions, $currentSlide); ?>
            <button type="submit" name="prev" class="prev">❮</button>
            <button type="submit" name="next" class="next">❯</button>
        </div>

        <br>

        <div style="text-align:center">
            <?php renderNavigationDots($totalImages, $currentSlide); ?>
        </div>
    </form>
</body>
</html>