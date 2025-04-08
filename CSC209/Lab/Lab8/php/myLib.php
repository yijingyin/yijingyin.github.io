<?php

function extractFolderNumber($filePath){
    $basename = basename($filePath);
    $weekNrString = substr($basename,-1);

    return $weekNr = (int)$weekNrString;

}
?>