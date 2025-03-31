function addCustomRow(feature, basic, pro) {
  var table = document.getElementById("comparisonTable");
  
  var newRow = document.createElement("tr");
  
  var featureCell = document.createElement("td");
  featureCell.textContent = feature;
  newRow.appendChild(featureCell);
  
  var basicCell = document.createElement("td");
  var basicIcon = document.createElement("i");
  basicIcon.className = "fa " + basic;
  basicCell.appendChild(basicIcon);
  newRow.appendChild(basicCell);
  
  var proCell = document.createElement("td");
  var proIcon = document.createElement("i");
  proIcon.className = "fa " + pro;
  proCell.appendChild(proIcon);
  newRow.appendChild(proCell);
  
  table.appendChild(newRow);
}


function loopRow(){
  for (var i = 0; i < NRROWS; i++) {
    addCustomRow(FEATURES[i], BASIC[i], PRO[i]);
  }
}