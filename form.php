<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title>Nutrition</title>
        <script>
                "use strict";

        // Creates input box for new ingredient
        var i = 1; //This is the ingredient count
        function createNewIngredient() {
            i++
            var txtNewInputBox = document.createElement('div');
            txtNewInputBox.innerHTML = `<input type="text" id="ingredient${i}" name="ingredient${i}" required >
                                        <input type=button value='X' id=removeIngredient${i} onclick=removeIngredient(${i}); >`;
            document.getElementById("ingredients-container").appendChild(txtNewInputBox);
        }
        // Creates input box for new direction
        var j = 1; //This is the directions count
        function createNewDirection() {
            j++
            var txtNewInputBox = document.createElement('li');
            txtNewInputBox.classList.add(`direction-step${j}`)
            txtNewInputBox.innerHTML = `<input type="text" id="direction${j}" name="direction${j}" required>
                                        <input type='button' value='X' id=removeDirection${j} onclick='removeDirection(${j});' >`;
            document.getElementById("directions-container").appendChild(txtNewInputBox);
        
        }
        // Functions to remove input box for ingredients when pressing on btn
        function removeIngredient(k) {
            var ingredient = document.getElementById(`ingredient${k}`);
            var clickedButton = document.getElementById(`removeIngredient${k}`);
            ingredient.remove();
            clickedButton.remove();
            // i-- // important step
        }
        //  Removes input box for directions when pressing on btn
        function removeDirection(k) {
            var direction = document.querySelector(`.direction-step${k}`);
            var clickedButton = document.getElementById(`removeDirection${k}`);
            direction.remove();
            clickedButton.remove();
            // j-- // important step
        }


        //Cookies in order to send info to server side.
        function sendCookies() {
            document.cookie = `ingredients-count=${i}`;
            document.cookie = `directions-count=${j}`;
            
        }
        // When user clicks on placeholder, file explorer opens.
        function triggerClick() {
            document.querySelector("#image").click();
        }
        // Previewing the image when user choses the file.
        function displayImage(e) {
            if (e.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    document.querySelector("#profileDisplay").setAttribute('src', e.target.result);
                }
            reader.readAsDataURL(e.files[0]);
                
            }
        }
        // Counts number of selected tags and limits use to select max 5
        function tagsCount(){
            var tags = document.getElementsByName('checkbox');
            var count = 0;
            for(i=0; i<tags.length; i++){
                if(tags[i].checked == true) {
                    count += 1;
                }
            }
            if(count > 5){
                document.getElementById('invalid-tags').innerHTML = "Please select max 5"
                return false;
            }
        }
        </script>
    </head>

    <body>
        <h1>
            Recipe Details
        </h1>
        <div class="wrapper">
        
            <form action="index.php" method="post" enctype="multipart/form-data">
                <div class="input-group">
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" placeholder="Give your recipe a title!" required>
                </div>
                <div class="input-group">
                    <label for="author">Name</label>
                    <input type="text" name="author" id="author" placeholder="e.g. Frank Pacard" required>
                </div>
                <div class="input-group">
                    <label for="duration">Duration</label>
                    <input type="number" name="duration" id="duration" placeholder="" required>
                    <select id="time-unit" name="time-unit"> 
                        <option value="mins">minutes</option>
                        <option value="hours">hours</option>
                    </select>
                </div>
                <div class="input-group">
                    <img src="Placeholder.png" onclick="triggerClick();" id="profileDisplay">
                    <label for="image">Image</label>
                    <input type="file" onchange="displayImage(this);" name="image" id="image">
                </div>
                <div class="input-group">
                    <label for="description">Description</label>
                    <input type="text" name="description" id="description" placeholder="Tell us about your recipe" required>
                </div>
                <div class="input-group">
                    <label for="ingredient1">Ingredients</label>
                    <div id="ingredients-container">
                        <input type="text" name="ingredient1" id="ingredient1" placeholder="e.g. 200g chicken breasts" required>
                        <input type="button" value="Add ingredient" onclick="createNewIngredient();"/>
                    </div>   
                </div>
                <div class="input-group">
                    <label for="direction1">Directions</label>
                    <ol id="directions-container">
                        <li><input type="text" name="direction1" id="direction1" placeholder="e.g. cook up 500g rice" required></li>
                        <input type="button" value="Add Direction" onclick="createNewDirection();"/>
                    </ol>   
                </div>

                <div class="input-group">
                    <label for="tags">Tags</label>
                    <div class="tags-container">
                        <label for="tag_bulking" class="tags">Bulking</label> <input type="checkbox" name="checkbox" id="tag_bulking" class="tags-checkboxes" onclick="return tagsCount();">
                        <label for="tag_cutting" class="tags">Cutting</label> <input type="checkbox" name="checkbox" id="tag_cutting" class="tags-checkboxes" onclick="return tagsCount();">
                        <label for="tag_shake_smoothie" class="tags">Shake/Smoothie</label> <input type="checkbox" name="checkbox" id="tag_shake_smoothie" class="tags-checkboxes" onclick="return tagsCount();">
                        <label for="tag_breakfast" class="tags">Breakfast</label> <input type="checkbox" name="checkbox" id="tag_breakfast" class="tags-checkboxes" onclick="return tagsCount();">
                        <label for="tag_dinner" class="tags">Dinner</label> <input type="checkbox" name="checkbox" id="tag_dinner" class="tags-checkboxes" onclick="return tagsCount();">
                        <label for="tag_snack" class="tags">Snack</label> <input type="checkbox" name="checkbox" id="tag_snack" class="tags-checkboxes" onclick="return tagsCount();">
                        <label for="tag_vegetarian" class="tags">Vegetarian</label> <input type="checkbox" name="checkbox" id="tag_vegetarian" class="tags-checkboxes" onclick="return tagsCount();">
                        <label for="tag_carnivor" class="tags">Carnivor</label> <input type="checkbox" name="checkbox" id="tag_carnivor" class="tags-checkboxes" onclick="return tagsCount();">
                        <label for="tag_cheap" class="tags">Cheap</label> <input type="checkbox" name="checkbox" id="tag_cheap" class="tags-checkboxes" onclick="return tagsCount();">
                    </div> 
                    <div id="invalid-tags"></div>
                </div>
               
   
                <div class="input-group">
                    <button type="submit" onclick="sendCookies()" name="submitRecipe" value="submitRecipe">Submit Recipe</button>
                </div>
            </form>   
        </div>
    </body>
</html>


    