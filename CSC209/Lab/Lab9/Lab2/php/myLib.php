<?php

function extractFolderNumber($filePath){
    $weekNrString = substr($filePath,-6,1);

    return $weekNr = (int)$weekNrString;

}
?>