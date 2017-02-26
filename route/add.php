<?php

  define('db_host','localhost');
  define('db_user','root');
  define('db_pass','mysql');
  define('db_name','angularjs');
   
$db = new mysqli(db_host,db_user,db_pass,db_name);
 
if($db->connect_errno > 0){
    die('Unable to connect to database [' . $db->connect_error . ']');
}  

$data = json_decode(file_get_contents("php://input"));

$nama = $data->nama;
$kelas = $data->kelas;



 $sql = "INSERT INTO `angularjs`.`mahasiswa` (`id`, `nama`, `alamat`) VALUES (NULL, '$nama', '$kelas')";
 $result = mysqli_query($db, $sql);

 
if($result){
	echo "berhasil";
}else{
	echo "gagal";
}

