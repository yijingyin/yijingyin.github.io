<?php
session_start();

$IMAGE_ROOT = 'images';


function initializeSession() {
    if (!isset($_SESSION['categories'])) {
        $_SESSION['categories'] = [];
        $_SESSION['currentCategory'] = '';
        $_SESSION['slideIndices'] = [];
    }
}


function getCategories($imageRoot) {
    return array_filter(glob("$imageRoot/*", GLOB_ONLYDIR), function($dir) {
        return count(glob("$dir/*.{jpg,jpeg,png,gif,webp}", GLOB_BRACE)) > 0;
    });
}

function handleCategorySelection($imageRoot, $categories) {

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['category'])) {
        $_SESSION['currentCategory'] = basename($_POST['category']);
        if (!isset($_SESSION['slideIndices'][$_SESSION['currentCategory']])) {
            $_SESSION['slideIndices'][$_SESSION['currentCategory']] = 1;
        }
    }
    

    if (empty($_SESSION['currentCategory']) && !empty($categories)) {
        $_SESSION['currentCategory'] = basename($categories[0]);
    }
}

function getCategoryContent($imageRoot, $category) {
    $imageFiles = [];
    $captions = [];
    
    if ($category) {
        $imageFiles = glob("$imageRoot/$category/*.{jpg,jpeg,png,gif,webp}", GLOB_BRACE);
        $captions = array_map(function($file) {
            return pathinfo($file, PATHINFO_FILENAME);
        }, $imageFiles);
    }
    
    return [$imageFiles, $captions];
}

function handleNavigation($category, $totalImages) {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $currentSlide = $_SESSION['slideIndices'][$category] ?? 1;
        
        if (isset($_POST['next'])) {
            $currentSlide = ($currentSlide % $totalImages) + 1;
        } elseif (isset($_POST['prev'])) {
            $currentSlide = ($currentSlide - 2 + $totalImages) % $totalImages + 1;
        } elseif (isset($_POST['goto'])) {
            $currentSlide = max(1, min((int)$_POST['goto'], $totalImages));
        }
        
        $_SESSION['slideIndices'][$category] = $currentSlide;
    }
}

function renderCategoryButtons($categories, $currentCategory) {
    echo '<div class="category-menu">';
    foreach ($categories as $category) {
        $catName = basename($category);
        $activeClass = $catName === $currentCategory ? 'active' : '';
        
        echo '<button type="submit" name="category" value="' . $catName . '"';
        echo ' class="category-btn ' . $activeClass . '">';
        echo ucfirst($catName);
        echo '</button>';
    }
    echo '</div>';
}


function renderSlides($imageFiles, $captions, $currentCategory, $currentSlide) {
    $totalImages = count($imageFiles);
    
    echo '<div class="slideshow-container">';
    foreach ($imageFiles as $index => $file) {
        $slideNumber = $index + 1;
        $display = $slideNumber === $currentSlide ? 'block' : 'none';
        
        echo '<div class="mySlides fade" style="display: ' . $display . '">';
        echo '<div class="numbertext">' . $slideNumber . ' / ' . $totalImages . '</div>';
        echo '<img src="' . $file . '" style="width:100%">';
        echo '<div class="text">' . $captions[$index] . '</div>';
        echo '</div>';
    }
    
    echo '<button type="submit" name="prev" class="prev">❮</button>';
    echo '<button type="submit" name="next" class="next">❯</button>';
    echo '</div>';
}


function renderNavigationDots($totalImages, $currentCategory, $currentSlide) {
    echo '<div style="text-align:center">';
    for ($i = 0; $i < $totalImages; $i++) {
        $dotSlide = $i + 1;
        $activeClass = $dotSlide === $currentSlide ? 'active' : '';
        
        echo '<button type="submit" name="goto" value="' . $dotSlide . '"';
        echo ' class="dot ' . $activeClass . '">&nbsp;</button>';
    }
    echo '</div>';
}


initializeSession();
$categories = getCategories($IMAGE_ROOT);
handleCategorySelection($IMAGE_ROOT, $categories);

$currentCategory = $_SESSION['currentCategory'] ?? '';
list($imageFiles, $captions) = getCategoryContent($IMAGE_ROOT, $currentCategory);
$totalImages = count($imageFiles);

handleNavigation($currentCategory, $totalImages);

$currentSlide = $_SESSION['slideIndices'][$currentCategory] ?? 1;
?>