// Set up the size of the page
var length = 8;
var width = 10;

// Calculate the area and perimeter
var area = length * width;
var perimeter = 2 * (length + width);

// Display the results
console.log("The area of a piece of paper with a length of " + length + " and a width of " + width + " is " + area);
console.log("The same piece of paper has a perimeter of " +perimeter);

// Check if the result is sensible
if (perimeter > area) {
    console.log("Yay, your perimeter is larger, which is correct for this example.");
} else {
    console.log("Hmm, your area is larger. It shouldn't be for this example.");
}
