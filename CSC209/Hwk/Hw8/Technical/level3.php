<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <?php 
    $imagePath = glob("./images/seasons/*");
    $imagePathNum = count($imagePath);
    ?>
    
    <?php 
    for($i=0; $i<$imagePathNum; $i++){
        $filename = basename($imagePath[$i]);
        echo '<input type="checkbox" id="check'.$i.'" onclick="checkImage('.$i.')">';
        echo '<label for="check'.$i.'">'.$filename.'</label><br>';
    }
    ?>
    
    <?php 
    for($i=0; $i<$imagePathNum; $i++){
        echo '<img src="'.$imagePath[$i].'" id="image'.$i.'" style="display:none;">';
    }
    ?>
    
    <script>
        function checkImage(id) {
            var images = document.getElementsByTagName("img");
            
            if(document.getElementById("check" + id).checked) {
                document.getElementById("image" + id).style.display = "block";
            } else {
                document.getElementById("image" + id).style.display = "none";
            }
        }
    </script>
</body>
</html>