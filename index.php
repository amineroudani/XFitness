<?php
include "functions.php";

?>


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nutrition</title>
</head>
<body>
    <?php
    if(isset($_SESSION['status'])){
        echo $_SESSION['status'];
        unset($_SESSION['status']);
    }
    ?>
    <a href="form.php">Post your recipe</a>
    
    <?php
    getRecipes($conn);
    ?>
    
</body>
</html>