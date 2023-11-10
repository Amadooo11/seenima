<?php
    class Movies{

        // Connection
        private $conn;

        // Table
        private $db_table = "movies";

        // Columns
        public $id;
        public $title; 
        public $content;
        public $duration;
        public $genre;
        public $img;
        public $bgimg;
        public $slots;
        public $price;
        public $category;
        public $video;

        // Db connection
        public function __construct($db){
            $this->conn = $db;
        }

        // GET ALL
        public function getMovie(){ 
            $sqlQuery = "SELECT movie_id,movie_title,movie_content,movie_duration,movie_genre,movie_img,movie_bgimg,movie_slots,movie_price,movie_category,movie_video FROM " . $this->db_table . "";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }

        // CREATE
        public function createMovie(){
            $sqlQuery = "INSERT INTO
                        ". $this->db_table ."
                    SET
                        movie_title = :title, 
                        movie_content = :content, 
                        movie_duration = :duration, 
                        movie_genre = :genre, 
                        movie_img = :img, 
                        movie_bgimg = :bgimg, 
                        movie_slots = :slots, 
                        movie_price = :price, 
                        movie_category = :category, 
                        movie_video = :video,
                   ";
          $stmt = $this->conn->prepare($sqlQuery);
        
          
            // bind data
            $stmt->bindParam(":id", $this->id);
            $stmt->bindParam(":title", $this->title);
            $stmt->bindParam(":duration", $this->duration);
            $stmt->bindParam(":content", $this->content);
            $stmt->bindParam(":genre", $this->genre);
            $stmt->bindParam(":img", $this->img);
            $stmt->bindParam(":bgimg", $this->bgimg);
            $stmt->bindParam(":slots", $this->slots);
            $stmt->bindParam(":price", $this->price);
            $stmt->bindParam(":category", $this->category);
            $stmt->bindParam(":video", $this->video);
            
            if($stmt->execute()){
               echo "Data saved successfully";
            }
            return "Could not saved the data";
            
        }

        // UPDATE
        public function getSingleMovie(){
            $sqlQuery = "SELECT
                        movie_id,
                        movie_title,
                        movie_content,  
                        movie_duration, 
                        movie_genre,
                        movie_img,
                        movie_bgimg,
                        movie_slots,
                        movie_price,
                        movie_category, 
                        movie_video
                      FROM
                        ". $this->db_table ."
                    WHERE 
                       movie_id = ?
                    LIMIT 0,1";

            $stmt = $this->conn->prepare($sqlQuery);

            $stmt->bindParam(1, $this->id);

            $stmt->execute();

            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
            
            $this->id = $dataRow['movie_id'];
            $this->title = $dataRow['movie_title']; 
            $this->content = $dataRow['movie_content'];
            $this->duration = $dataRow['movie_duration'];
            $this->genre = $dataRow['movie_genre'];
            $this->img = $dataRow['movie_img']; 
            $this->bgimg = $dataRow['movie_bgimg'];
            $this->slots = $dataRow['movie_slots'];
            $this->price = $dataRow['movie_price'];  
            $this->category = $dataRow['movie_category'];
            $this->video = $dataRow['movie_video']; 
            
        }        

        // UPDATE
        public function updateEmployee(){
            $sqlQuery = "UPDATE
                        ". $this->db_table ."
                    SET
                        name = :name, 
                        email = :email, 
                        age = :age, 
                        designation = :designation 
                    WHERE 
                        id = :id";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->name=htmlspecialchars(strip_tags($this->name));
            $this->email=htmlspecialchars(strip_tags($this->email));
            $this->age=htmlspecialchars(strip_tags($this->age));
            $this->designation=htmlspecialchars(strip_tags($this->designation));
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            // bind data
            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":age", $this->age);
            $stmt->bindParam(":designation", $this->designation);
            $stmt->bindParam(":id", $this->id);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }

        // DELETE
        function deleteEmployee(){
            $sqlQuery = "DELETE FROM " . $this->db_table . " WHERE id = ?";
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            $stmt->bindParam(1, $this->id);
        
            if($stmt->execute()){
                return true;
            }
            return false;
        }

    }
?>

