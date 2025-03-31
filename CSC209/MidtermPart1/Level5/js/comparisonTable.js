
var ROW = "<tr><td>Sample text</td><td>CHECKCROSSBASIC</td><td>CHECKCROSSPRO</td></tr>";
var ROW2 = "<tr><td>Sample text</td><td><i class=\"fa fa-remove\"></i></td><td><i class=\"fa fa-check\"></i></td></tr>";
//alert(ROW);
//alert(ROW2);

function addRow(basicOption, proOption) {

  var newRow = ROW.replace("CHECKCROSSBASIC", basicOption).replace("CHECKCROSSPRO", proOption);

  document.getElementById("comparisonTable").innerHTML += newRow;
}


