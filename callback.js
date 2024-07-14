"use strict";
function parentFunction(func) {
    console.log("I'm the parent function"); //1
    func(); //childFunction
}
function childFunction() {
    console.log("I'm the child function");
}
parentFunction(childFunction);
