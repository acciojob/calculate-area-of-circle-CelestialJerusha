 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
	 let p = document.getElementById("para");
	 p.innerHTML = "The area of the circle with radius "+radius+" is "+(Math.PI*radius*radius);
    
}
calculateArea();
