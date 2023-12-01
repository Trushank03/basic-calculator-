/* This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function displays the values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns the result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
*/
// Get the result input element
var result = document.getElementById('result');

// Function to display numbers and operators on the screen
function display(value) {
    result.value += value;
}

// Function to clear the screen
function clearScreen() {
    result.value = '';
}

// Function to perform the calculation
function calculate() {
    try {
        // Use eval to calculate the result, but be cautious with user input
        result.value = eval(result.value);
    } catch (error) {
        // Handle errors, for example, if the user entered an invalid expression
        result.value = 'Error';
    }
}
