
let allScreens = document.getElementById("display-screen");
let num1 = document.getElementById("left-display").value;
let op = document.getElementById("mid-display").value;
let num2 = document.getElementById("right-display").value;



function calculate(value){

    if(value === "=") {
        let all = allScreens.value.split(" ");
        num1 = parseFloat(all[0]);
        op = all[1];
        num2 = parseFloat(all[2]);


        if (num2 == 0) {
            num2.value = "division by zero!"
        }
        switch (op) {

            case '+':
                let result = num1 + num2;
                num2.value = result;
                break;

            case '-':
               result = num1 - num2;
                num2.value = result;
                break;

            case '*':
                result = num1 * num2;
                num2.value = result;
                break;

            case '/':
                result = num1 / num2;
                num2.value = result;
                break;

            case '%':
                result = num1 % num2;
                num2.value = result;
                break;

            default:

                break;
        }

    } else {
        return;
    }

}





// function numbers(value) {
//     let screens = document.getElementById("display-screen")
//        let leftScreen = document.getElementById("left-display");
//        let middleScreen = document.getElementById("mid-display");
//        let rightScreen = document.getElementById("right-display");
//
//     if(value == "="){
//
//         let all = screens.value.split(" ")
//         let firstValue = parseFloat(all[0]);
//         let operator = all[1];
//         let secondValue = parseFloat(all[2])
//
//         let middleScreen = document.getElementById("mid-display");
//
//         if (secondValue == 0)
//         {
//             screen.value="division by zero!"
//         }
//         switch(op)
//         {
//
//             case '+':
//                result = firstValue + secondValue;
//                 screen.value= result;
//                 break;
//             case '-':
//                result = firstValue - secondValue;
//                 screen.value= result;
//                 break;
//             case '*':
//                 result = firstValue * secondValue;
//                 screen.value= result;
//                 break;
//             case '/':
//                 result = firstValue / secondValue;
//                 screen.value= result;
//
//                 break;
//             case '%':
//                 result = firstValue % secondValue;
//                 screen.value= result;
//                 break;
//             default:
//
//                 break;
//         }
//
//
//     }
//






// }