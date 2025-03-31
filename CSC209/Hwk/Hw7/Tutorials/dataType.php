<!DOCTYPE html>
<html>
<body>

<?php 
$x = "Hello world!";
$y = 'Hello world!';

var_dump($x);
echo "<br>"; 
var_dump($y);

$z = 10.365;
var_dump($z);

$a = true;
var_dump($a);

$cars = array("Volvo","BMW","Toyota");
var_dump($cars);

class Car {
    public $color;
    public $model;
    public function __construct($color, $model) {
      $this->color = $color;
      $this->model = $model;
    }
    public function message() {
      return "My car is a " . $this->color . " " . $this->model . "!";
    }
  }
  
  $myCar = new Car("red", "Volvo");
  var_dump($myCar);

  $b = 5;
var_dump($b);

echo "<br>";

$b = "Hello";
var_dump($b);
?>

</body>
</html>