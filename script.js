
let btn = document.querySelector("button");



btn.addEventListener("click", function () {
     let h2 = document.querySelector("h2");
     let color = getRandomColor(); 
     h2.innerText = color; // Set the text of the h2 element to the random color
     console.log("color updated"); // Log the color to the console

     let box = document.getElementsByClassName("box")[0]; // Get the first element with the class "box"
     let  = box.style.backgroundColor = color; // Set the background color of the div to the random color
 }   
);

function getRandomColor() {
// Generate a random color in RGB format
// Each color component (red, green, blue) is a random number between 0 and 255
let red = (Math.floor(Math.random() * 255));
let green = (Math.floor(Math.random() * 255));
let blue = (Math.floor(Math.random() * 255));

let rgb = `rgb(${red}, ${green}, ${blue})`;
return rgb;
}
