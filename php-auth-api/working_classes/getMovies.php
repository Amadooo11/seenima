<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    include_once '../classes/Database.php';
    include_once './movies.php'; //amp

    $database = new Database();
    $db = $database->dbConnection();

    $items = new Movies($db);

    $stmt = $items->getMovie();
    $itemCount = $stmt->rowCount();



    if($itemCount > 0){
        $moviesArr = array();
        $moviesArr["body"] = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $e = array(
                "id" => $movie_id,
                "title" => $movie_title,
                "content" => $movie_content,
                "duration" => $movie_duration, //
                "genre" => $movie_genre, 
                "img" => $movie_img,
                "bgimg" => $movie_bgimg,
                "slots" => $movie_slots, //
                "price" => $movie_price, 
                "category" => $movie_category, //
                "video" => $movie_video,
            
            );

            array_push($moviesArr["body"], $e);
        }
        echo json_encode($moviesArr);
    }

    else{
        http_response_code(404);
        echo json_encode(
            array("message" => "No record found.")
        );
    }
?>