<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../classes/Database.php';
    include_once './movies.php';

    $database = new Database();
    $db = $database->dbConnection();

    $item = new Movies($db);

    $item->id = isset($_GET['id']) ? $_GET['id'] : die();

    $stmt = $item->getSingleMovie();


    if($item->title != null){
        
            $e = array(
                "id" => $item->id,
                "title" => $item->title, 
                "content" => $item->content,
                "duration" =>$item->duration, //
                "genre" =>$item->genre, 
                "img" => $item->img,
                "bgimg" => $item->bgimg,
                "slots" => $item->slots, //
                "price" => $item->price, 
                "category" => $item->category, //
                "video" => $item->video,
            
            );

            http_response_code(200);
            echo json_encode($e);
        }
      
 

    else{
        http_response_code(404);
       echo "movie not found!";
    }
?>