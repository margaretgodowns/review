var box = document.getElementById("box");
             var time = Math.random()*5000;
             var clickedTime;
             var createdTime;
             var reactionTime;
             
             //a useful function for getting the current timestamp
             Date.now();
             
             //this function creates a new rgb color then assigns it to the background-color of the box
             function changeBoxColor() {
                 var red = Math.random()*256;
                 red = Math.floor(red);
                 var green = Math.random()*256;
                 green = Math.floor(green);
                 var blue = Math.random()*256;
                 blue = Math.floor(blue);
                 var color = "rgb(" +red+","+green+","+blue+")";
                 box.style.backgroundColor = color;
             }
             
//              makes box appear in five seconds or less, changes the color of the box, and records time that box is created in the createdTime variable
             function appear() {
                 setTimeout(function() {
                    if (Math.random() > 0.5) {
                        box.style.borderRadius = "100px";
                    }   else {
                        box.style.borderRadius = 0;
                    }
                    box.style.display = "block";
                    var left = Math.random()*500+"px";
                    box.style.left = left;
                    changeBoxColor();
                    createdTime = Date.now(); 
                 }, time);
             }
             
             // when box is clicked, box disappears, time is stored in clickedTime variable, reaction time is calculated by finding the difference between clickedTime and createdTime and is converted to seconds, reaction time is displayed, box reappears
             box.onclick = function() {
                 this.style.display = "none";
                 clickedTime = Date.now();
                 reactionTime = (clickedTime - createdTime)/1000;
                 document.getElementById("time").innerHTML = reactionTime;
                 appear();
             }
             
             //makes the square appear on page load
             appear();