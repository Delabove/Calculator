//
//
//
// let current = "0";
// let maxLength = 30;
// let num1 = parseFloat(document.getElementById("left-display").value);
// let op = document.getElementById("left-display").value;
// let num2 = parseFloat(document.getElementById("left-display").value);
// let screen = document.getElementById("left-display")
//
//
// // Add number to display
// function displayNumber(num) {
//
//     if (current.length > maxLength) {
//         return "Too Long!"
//
//     } else if (current == 0 && current.indexOf(".") == -1) {
//         current = num;
//
//     } else if (num2 == 0) {
//             screen.value = "division by zero!"
//         }
//         switch (op) {
//
//             case '+':
//                 let result = num1 + num2;
//                 screen.value = result;
//                 break;
//
//             case '-':
//                 result = num1 - num2;
//                 screen.value = result;
//                 break;
//
//             case '*':
//                 result = num1 * num2;
//                 screen.value = result;
//                 break;
//
//             case '/':
//                 result = num1 / num2;
//                 screen.value = result;
//                 break;
//
//             case '%':
//                 result = num1 % num2;
//                 screen.value = result;
//                 break;
//
//             default:
//
//                 break;
//         }
//
//         document.getElementById("left-display").value = current;
//
// }