
function addRow(option1, option2) {

  var newRow = ROW.replace("CHECKCROSSBASIC", option1).replace("CHECKCROSSPRO", option2);

  document.getElementById("comparisonTable").innerHTML += newRow;
}

function addCustomRow(feature, basic, pro) {
  var newRow = "<tr><td>" + feature + "</td><td><i class=\"fa " + basic + "\"></i></td><td><i class=\"fa " + pro + "\"></i></td></tr>";
  
  document.getElementById("comparisonTable").innerHTML += newRow;
}

function loopRow(){
  for (var i = 0; i < NRROWS; i++) {
    addCustomRow(FEATURES[i], BASIC[i], PRO[i]);
  }
}