<!DOCTYPE html>

<head>
<?php
$imageFiles = glob('images/seasons/*.{jpg,jpeg,png,gif,webp}', GLOB_BRACE);
$totalImages = count($imageFiles);

$images = [];
$captions = [];

foreach ($imageFiles as $file) {
    $images[] = $file;

    $caption = pathinfo($file, PATHINFO_FILENAME);
    $captions[] = $caption;
}
?>

    <link id="pagestyle" rel="stylesheet" href="css/technical.css">

</head>
<body>
    <div class="slideshow-container" id="slideContainer">
        <?php if (count($images) > 0): ?>
            <?php for ($i = 0; $i < count($images); $i++): ?>
                <div class="mySlides fade">
                    <div class="numbertext"><?php echo ($i + 1) . ' / ' . count($images); ?></div>
                    <img src="<?php echo $images[$i]; ?>" style="width:100%">
                    <div class="text"><?php echo $captions[$i]; ?></div>
                </div>
            <?php endfor; ?>
        <?php else: ?>
            <div class="mySlides fade">
                <div class="text">No images found in the directory</div>
            </div>
        <?php endif; ?>
        
        <a class="prev" onclick="plusSlides(-1)">❮</a>
        <a class="next" onclick="plusSlides(1)">❯</a>
    </div>
    
    <br>
    
    <div style="text-align:center" id="dotContainer">
        <?php for ($i = 0; $i < count($images); $i++): ?>
            <span class="dot" onclick="currentSlide(<?php echo $i + 1; ?>)"></span>
        <?php endfor; ?>
    </div>
    
    <script>
        let slideIndex = 1;
        let images = <?php echo json_encode($images); ?>;
        let captions = <?php echo json_encode($captions); ?>;
        
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
            const slides = document.getElementsByClassName("mySlides");
            const dots = document.getElementsByClassName("dot");
            
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
                dots[i].className = dots[i].className.replace(" active", "");
            }
            
            if (slides.length > 0) {
                slides[slideIndex-1].style.display = "block";
                dots[slideIndex-1].className += " active";
            }
        }
        
            showSlides(slideIndex);

    </script>
</body>
</html>