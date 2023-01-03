<?php 
$numero1 = $_GET["n1"]; 
$numero2 = $_GET["n2"]; 
$resp=$numero1+$numero2; 
echo '{"resp":"'.$resp.'"}';