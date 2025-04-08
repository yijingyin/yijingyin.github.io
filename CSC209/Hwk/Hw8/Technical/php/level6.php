<?php
function initializeSession() {
    if (!isset($_SESSION['currentSlide'])) {
        $_SESSION['currentSlide'] = 1;
    }
}

function handleNavigation() {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (isset($_POST['next'])) {
            $_SESSION['currentSlide']++;
        } elseif (isset($_POST['prev'])) {
            $_SESSION['currentSlide']--;
        } elseif (isset($_POST['goto'])) {
            $_SESSION['currentSlide'] = (int)$_POST['goto'];
        }
    }
}

function getImageFiles($directory = 'images/seasons/') {
    return glob($directory . '*.{jpg,jpeg,png,gif,webp}', GLOB_BRACE);
}

function generateCaptions($imageFiles) {
    return array_map(function($file) {
        return pathinfo($file, PATHINFO_FILENAME);
    }, $imageFiles);
}

function validateSlideNumber($totalImages) {
    $currentSlide = $_SESSION['currentSlide'];
    $currentSlide = max(1, min($currentSlide, $totalImages));
    $_SESSION['currentSlide'] = $currentSlide;
    return $currentSlide;
}

function renderSlides($imageFiles, $captions, $currentSlide) {
    if (empty($imageFiles)) {
        echo '<div class="mySlides fade"><div class="text">No images found</div></div>';
        return;
    }
    
    $total = count($imageFiles);
    foreach ($imageFiles as $index => $file) {
        $slideNumber = $index + 1;
        $display = $slideNumber === $currentSlide ? 'block' : 'none';
        
        echo '<div class="mySlides fade" style="display: ' . $display . '">';
        echo '<div class="numbertext">' . $slideNumber . ' / ' . $total . '</div>';
        echo '<img src="' . $file . '" style="width:100%">';
        echo '<div class="text">' . $captions[$index] . '</div>';
        echo '</div>';
    }
}

function renderNavigationDots($totalImages, $currentSlide) {
    for ($i = 0; $i < $totalImages; $i++) {
        $dotSlide = $i + 1;
        $active = $dotSlide === $currentSlide ? 'active' : '';
        
        echo '<button type="submit" name="goto" value="' . $dotSlide . '"';
        echo ' class="dot ' . $active . '">&nbsp;</button>';
    }
}

initializeSession();
handleNavigation();

$imageFiles = getImageFiles();
$totalImages = count($imageFiles);
$currentSlide = validateSlideNumber($totalImages);
$captions = generateCaptions($imageFiles);
?>