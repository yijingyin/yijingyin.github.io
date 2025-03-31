<!DOCTYPE html>
<html>
<body>
<?php
$headers = ['First Name', 'Last Name', 'Age'];
$columns = [
    ['John', 'Jane', 'Alice', 'Bob', 'Charlie', 'Diana'],
    ['Doe', 'Smith', 'Johnson', 'Williams', 'Brown', 'Davis'],
    [25, 30, 28, 32, 35, 40]
];


$ncols = count($columns);
$nrows = count($columns[0]);


echo "<table border='1'>\n";

if (!empty($headers)) {
    echo "<tr>";
    foreach ($headers as $header) {
        echo "<th>$header</th>";
    }
    echo "</tr>\n";
}


for ($i = 0; $i < $nrows; $i++) {
    echo "<tr>";
    foreach ($columns as $col) {
        echo "<td>{$col[$i]}</td>";
    }
    echo "</tr>\n";
}

echo "</table>";
?>
</body>
</html>