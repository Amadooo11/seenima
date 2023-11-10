<?php 
require 'movies.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->movietitle)
	&& isset($data->moviedescription) 
	&& !empty(trim($data->movietitle))
	&& !empty(trim($data->moviedescription))
	){
		 
	$movietitle = mysqli_real_escape_string($connection, trim($data->movietitle));
	$moviedescription = mysqli_real_escape_string($connection, trim($data->moviedescription));

	$add = mysqli_query($connection,"insert into movie_details (movie_title,movie_description) values('$movietitle','$moviedescription')");
	if($add){
		$last_id = mysqli_insert_id($connection);
		echo json_encode(["success"=>true,"insertid"=>$last_id]);
		return;
    }else{
        echo json_encode(["success"=>false,"msg"=>"Server Problem. Please Try Again"]);
		return;
    } 
// wait ill check my code oki
} else{
    echo json_encode(["success"=>false,"msg"=>"Please fill all the required fields!"]);
	return;
}
?> 