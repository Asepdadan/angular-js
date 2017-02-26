<?php

  define('db_host','localhost');
  define('db_user','root');
  define('db_pass','mysql');
  define('db_name','angularjs');
   
$db = new mysqli(db_host,db_user,db_pass,db_name);
 
if($db->connect_errno > 0){
    die('Unable to connect to database [' . $db->connect_error . ']');
}  


$sql = "select * from mahasiswa";
$result = mysqli_query($db, $sql);

$output = "";
while ($row = mysqli_fetch_assoc($result)) {
	if($output != ""){
		$output .= ",";
	}

	$output .= '{"id" : "'.$row['id'].'",';
	$output .= '"nama" : "'.$row['nama'].'",';
	$output .= '"alamat" : "'.$row['alamat'].'"}';
}

$output = '['.$output.']';

echo $output;

