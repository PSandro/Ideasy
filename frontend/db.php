<?php

$cserver = "psandro.de";
$cdatabase = "ideasy";
$cuser = "cd";
$cpw = "codedesign";

try{
	$conn = new PDO("mysql:host=$cserver;dbname=$cdatabase;", $cuser, $cpw);
} catch(PDOException $e){
	die( "Connection failed: " . $e->getMessage());
}
?>