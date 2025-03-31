
var ROW = "<tr><td>Sample text</td><td>CHECKCROSSBASIC</td><td>CHECKCROSSPRO</td></tr>";
var ROW2 = "<tr><td>Sample text</td><td><i class=\"fa fa-remove\"></i></td><td><i class=\"fa fa-check\"></i></td></tr>";
//alert(ROW);
//alert(ROW2);

function addRow(option1, option2) {

  var newRow = ROW.replace("CHECKCROSSBASIC", option1).replace("CHECKCROSSPRO", option2);

  document.getElementById("comparisonTable").innerHTML += newRow;
}

function addCustomRow(feature, basic, pro) {
  var newRow = "<tr><td>" + feature + "</td><td><i class=\"fa " + basic + "\"></i></td><td><i class=\"fa " + pro + "\"></i></td></tr>";
  
  document.getElementById("comparisonTable").innerHTML += newRow;
}
