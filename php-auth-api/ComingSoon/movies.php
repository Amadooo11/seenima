<?php
    class ComingSoon{

        // Connection
        private $conn;

        // Table
        private $db_table = "comingsoon_movies";

        // Columns
        public $id;
        public $title; 
        public $description;
        public $genre;
        public $img;
        public $bgimg;
        public $category;
       

        // Db connection
        public function __construct($db){
            $this->conn = $db;
        }

        // GET ALL
        public function getMovie(){ 
            $sqlQuery = "SELECT comingsoon_id,comingsoon_title,comingsoon_description,comingsoon_genre,comingsoon_img,comingsoon_bgimg,comingsoon_category FROM " . $this->db_table . "";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }

        // CREATE
        public function createMovie(){
            $sqlQuery = "INSERT INTO
                        ". $this->db_table ."
                    SET
                        comingsoon_title = :title, 
                        comingsoon_description = :description, 
                        comingsoon_genre = :genre, 
                        comingsoon_img = :img, 
                        comingsoon_bgimg = :bgimg, 
                        comingsoon_category = :category, 
                
                   ";
          $stmt = $this->conn->prepare($sqlQuery);
        
          
            // bind data
            $stmt->bindParam(":id", $this->id);
            $stmt->bindParam(":title", $this->title);
       
            $stmt->bindParam(":description", $this->description);
            $stmt->bindParam(":genre", $this->genre);
            $stmt->bindParam(":img", $this->img);
            $stmt->bindParam(":bgimg", $this->bgimg);
            $stmt->bindParam(":category", $this->category);
     
            
            if($stmt->execute()){
               echo "Data saved successfully";
            }
            return "Could not saved the data";
            
        }

        // UPDATE
        public function getSingleMovie(){
            $sqlQuery = "SELECT
                        comingsoon_id,
                        comingsoon_title,
                        comingsoon_content,  
                        comingsoon_duration, 
                        comingsoon_genre,
                        comingsoon_img,
                        comingsoon_bgimg,
                        comingsoon_slots,
                        comingsoon_price,
                        comingsoon_category, 
                        comingsoon_video
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

