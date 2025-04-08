<?php
session_start();


$IMAGE_ROOT = 'images';


if (!isset($_SESSION['categories'])) {
    $_SESSION['categories'] = [];
    $_SESSION['currentCategory'] = '';
    $_SESSION['slideIndices'] = [];
}


$categories = array_filter(glob("$IMAGE_ROOT/*", GLOB_ONLYDIR), function($dir) {
    return count(glob("$dir/*.{jpg,jpeg,png,gif,webp}", GLOB_BRACE)) > 0;
});


if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['category'])) {
    $_SESSION['currentCategory'] = basename($_POST['category']);
    if (!isset($_SESSION['slideIndices'][$_SESSION['currentCategory']])) {
        $_SESSION['slideIndices'][$_SESSION['currentCategory']] = 1;
    }
}

if (empty($_SESSION['currentCategory']) && !empty($categories)) {
    $_SESSION['currentCategory'] = basename($categories[0]);
}

$currentCategory = $_SESSION['currentCategory'] ?? '';
$imageFiles = [];
$captions = [];
if ($currentCategory) {
    $imageFiles = glob("$IMAGE_ROOT/$currentCategory/*.{jpg,jpeg,png,gif,webp}", GLOB_BRACE);
    $captions = array_map(function($file) {
        return pathinfo($file, PATHINFO_FILENAME);
    }, $imageFiles);
}
$totalImages = count($imageFiles);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $currentSlide = $_SESSION['slideIndices'][$currentCategory] ?? 1;
    
    if (isset($_POST['next'])) {
        $currentSlide = ($currentSlide % $totalImages) + 1;
    } elseif (isset($_POST['prev'])) {
        $currentSlide = ($currentSlide - 2 + $totalImages) % $totalImages + 1;
    } elseif (isset($_POST['goto'])) {
        $currentSlide = max(1, min((int)$_POST['goto'], $totalImages));
    }
    
    $_SESSION['slideIndices'][$currentCategory] = $currentSlide;
}
?>

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="css/creative.css">

</head>
<body>
    <h2>Creative: 2 hr</h2>
    <form method="post">
        <div class="category-menu">
            <?php foreach ($categories as $category): ?>
                <?php $catName = basename($category); ?>
                <button type="submit" name="category" value="<?= $catName ?>" 
                    class="category-btn <?= $catName === $currentCategory ? 'active' : '' ?>">
                    <?= ucfirst($catName) ?>
                </button>
            <?php endforeach; ?>
        </div>

        <?php if ($currentCategory && $totalImages > 0): ?>
            <div class="slideshow-container">
                <?php foreach ($imageFiles as $index => $file): ?>
                    <?php $slideNumber = $index + 1; ?>
                    <div class="mySlides fade" style="display: <?= $slideNumber === $_SESSION['slideIndices'][$currentCategory] ? 'block' : 'none' ?>">
                        <div class="numbertext"><?= "$slideNumber / $totalImages" ?></div>
                        <img src="<?= $file ?>" >
                        <div class="text"><?= $captions[$index] ?></div>
                    </div>
                <?php endforeach; ?>

                <button type="submit" name="prev" class="prev">❮</button>
                <button type="submit" name="next" class="next">❯</button>
            </div>

            <br>
            <div style="text-align:center">
                <?php for ($i = 0; $i < $totalImages; $i++): ?>
                    <?php $dotSlide = $i + 1; ?>
                    <button type="submit" name="goto" value="<?= $dotSlide ?>" 
                        class="dot <?= $dotSlide === $_SESSION['slideIndices'][$currentCategory] ? 'active' : '' ?>">
                        &nbsp;
                    </button>
                <?php endfor; ?>
            </div>
        <?php elseif ($currentCategory): ?>
            <div class="no-images">No images found in this category</div>
        <?php else: ?>
            <div class="no-categories">No image categories available</div>
        <?php endif; ?>
    </form>
</body>
</html>