<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header("HTTP/1.1 200 OK");
die();
}

    include_once '../classes/Database.php';
    include_once './class.php';

    $database = new Database();
    $db = $database->dbConnection();

    $item = new Booking($db);

    $data = json_decode(file_get_contents("php://input"));

    $item->username = $data->username;
    $item->email = $data->email; 
    $item->phone = $data->phone;
    $item->payment = $data->payment;
    $item->amount = $data->amount; 
    $item->time = $data->time;
    $item->date = $data->date; 
    $item->room = $data->room;   
    
    if($item->createUser()){
        echo 'Reservation created successfully.';
    } else{
        echo 'Reservation could not be created.';
    }
?>