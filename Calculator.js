// define constant and global
//      Memory  = "0";      // initialize memory variable
//     Current = "0";      //   and value of Display ("current" value)
//     Operation = 0;      // Records code for eg * / etc.
//     MAXLENGTH = 30;     // maximum number of digits before decimal!variables

let memory = "0";
let current = "0";
let operation = 0;
let maxLength = 30;


// Add number to display
function addNumber(num) {

    if (current.length > maxLength) {
        return "Too Long!"

    } else if (current == 0 && current.indexOf(".") == -1) {
        current = num;

    } else {
        return current + num;
    }

    document.getElementById("left-display").value = current;

    ;
}