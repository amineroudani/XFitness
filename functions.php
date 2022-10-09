<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "OnlyGains";

// Create connection to db
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection to db
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}


// Post all data from FORM to DB
if (isset($_POST['submitRecipe']) ) {  
        // Assign variables to the following
        $img_name = $_FILES['image']['name'];
        $img_size = $_FILES['image']['size'];
        $tmp_name = $_FILES['image']['tmp_name'];
        $error = $_FILES['image']['error'];

    // Check for errors
        if ($error === 0) {	
        // Check image size
            if ($img_size < 125000) {
                $img_ex = pathinfo($img_name, PATHINFO_EXTENSION);
                $img_ex_lc = strtolower($img_ex);
                $allowed_exs = array("jpg", "jpeg", "png"); 
            // Check file format
                if (in_array($img_ex_lc, $allowed_exs)) {
                    $new_img_name = uniqid("IMG-", true).'.'.$img_ex_lc;
                    $img_upload_path = 'UPLOADS/'.$new_img_name;
                // Check successful upload
                    if (move_uploaded_file($tmp_name, $img_upload_path)){
                        echo "Image uploaded successfully.";
                    }
                    else {
                        echo "Failed to upload image.";
                    }
                // We insert it into database later with everything else...
                } 
                else {
                    $em = "You can't upload files of this type";
                    header("Location: index.php?error=$em");
                }			
            }
            else {
                $em = "Sorry, your file is too large.";
                header("Location: index.php?error=$em");			
            }
        }
        else {
            $em = "unknown error occurred!";
            header("Location: index.php?error=$em");
        }



    $title = $_POST['title'];
    $author = $_POST['author'];
    $duration = strval($_POST['duration'])." ".$_POST['time-unit'];  // e.g. "9 mins", "1 hours"
    $tags = $_POST['tags'];
    $description = $_POST['description'];
    $img_url = $img_upload_path;;
    $ingredients = " ";
    $directions = " ";

    // Get the number of ingredients and directions from cookies sent by js.
    $ingredients_count = $_COOKIE['ingredients-count'];
    $directions_count = $_COOKIE['directions-count'];

    // Concentate strings for all ingredients and directions respectively.
    for($i=1; $i<$ingredients_count + 1; $i++){
        $ingredients = $ingredients.$_POST['ingredient'.$i]; 
        // echo "$ingredients, ";
    }   


    for($j=1; $j<$directions_count + 1; $j++){
        $directions = $directions.$_POST['direction'.$j]."  ";
        // echo "$directions, ";

    }    

    // Insert data into table in db
    $sql = "INSERT INTO Recipes (title, author, duration, tags, description, ingredients, directions, img_url)
    VALUES ('$title', '$author', '$duration', '$tags', '$description', '$ingredients', '$directions', '$img_url')";


    // Check if insertion was successful.
    if ($conn->query($sql) === TRUE) {
    
    $_SESSION['status'] = "Recipe Posted Sucessfully";


    } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    }

}

function getRecipes($conn){
    $sql = "SELECT * FROM Recipes";
    $result = $conn->query($sql);
    while ($row = $result->fetch_assoc()) {
        echo "<div class='recipe-box'>";
            echo $row['uid']."<br>";
            echo $row['title']."<br>";
            echo $row['author']."<br>";
            echo $row['duration']."<br>";
            echo $row['tags']."<br>";
            echo $row['description']."<br>";
            echo $row['ingredients']."<br>";
            echo $row['directions']."<br>";
            echo $row['img_url']."<br>";
        echo "</div>";
    }
}



?>
