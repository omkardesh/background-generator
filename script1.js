var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
var body = document.getElementById("back_ground")

console.log(col1);
console.log(col2);


col1.addEventListener("input", function(){
	body.style.background = "linear-gradient(to right,"+col1.value +","+col2.value+")"; 
});

col2.addEventListener("input", function(){
	body.style.background = "linear-gradient(to right,"+col1.value +","+col2.value+")"; 
});