<?php
header('Content-Type:text/xml');
echo'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';

echo'<response>';

$cd=$_GET['food'];
$foodArray=array('Empire Burlesque','Hide your heart','Greatest Hits','DBZ Super','Naruto shippuden');
if(in_array($cd,$foodArray)){
	echo'We Do Have '.$cd.'!';
}
elseif($cd=='') echo "Enter a Title Please";
else echo'Sorry We Dont Have '.$cd.'!';
echo'</response>';

?>