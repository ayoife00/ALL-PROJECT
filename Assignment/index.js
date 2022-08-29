"use strict";

//Create a function
function result(myArr) {
  //Use a conditional statement to check true or false
  if (myArr[0] === myArr[myArr.length - 1]){
    return true;
  };
  else {
    return false;
  }
}

//Print to the browser
const newh1 = document.createElement('h1');
newh1.innerHTML = result([20, 30, 14, 18, 17, 16, 20]);
document.body.appendChild(newh1);
