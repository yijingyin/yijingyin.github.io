

<!DOCTYPE html>
<html>
<head>
    <title>Category Slideshow</title>
    <link rel="stylesheet" href="css/technical.css">
    <?php include 'php/level7.php';?>
</head>
<body>
    <h2>Creative: 6 hr</h2>
    <form method="post">
        <?php renderCategoryButtons($categories, $currentCategory); ?>
        
        <?php if ($currentCategory && $totalImages > 0): ?>
            <?php 
                renderSlides($imageFiles, $captions, $currentCategory, $currentSlide);
                echo '<br>';
                renderNavigationDots($totalImages, $currentCategory, $currentSlide);
            ?>
        <?php elseif ($currentCategory): ?>
            <div class="no-images">No images found in this category</div>
        <?php else: ?>
            <div class="no-categories">No image categories available</div>
        <?php endif; ?>
    </form>
</body>
</html>