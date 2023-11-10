<?php
    class Booking{

        // Connection
        private $conn;

        // Table
        private $db_table = "client_reservation";

        // Columns
        public $username; 
        public $email;
        public $phone;
        public $payment; 
        public $amount;
        public $time;
        public $date;
        public $room;
      

        // Db connection
        public function __construct($db){
            $this->conn = $db;
        }

        // CREATE
        public function createUser(){
            $sqlQuery = "INSERT INTO
                        ". $this->db_table ."
                    SET
                        user_name = :username, 
                        user_phone = :phone, 
                        user_email = :email, 
                        user_payment = :payment, 
                        amounts = :amount, 
                        reservation_time = :time, 
                        reservation_date = :date, 
                        reservation_room = :room";
          $stmt = $this->conn->prepare($sqlQuery);
        
          
            // bind data
        
            $stmt->bindParam(":username", $this->username);
            $stmt->bindParam(":phone", $this->phone);
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":payment", $this->payment);
            $stmt->bindParam(":amount", $this->amount);
            $stmt->bindParam(":time", $this->time);
            $stmt->bindParam(":date", $this->date);
            $stmt->bindParam(":room", $this->room);
            
            if($stmt->execute()){
               echo "Data saved successfully";
            }
            return "Could not saved the data";
            
        }

    }
?>

