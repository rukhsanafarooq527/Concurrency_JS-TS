"use strict";
//CALLBACK
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// function washing(callback: () => void) {
//   console.log('Washing started...');
//   setTimeout(() => {
//     console.log('washing done!');
//     callback();
//   }, 5000);
// }
// function soaking(callback: () => void) {
//   console.log('Soaking started...');
//   setTimeout(() => {
//     console.log('Soaking done!');
//     callback();
//   }, 3000);
// }
// function drying() {
//   console.log('Drying started...');
//   setTimeout(() => {
//     console.log('Drying done!');
//   }, 2000);
// }
// console.log('folding laundry');
// washing(() => {
//   soaking(() => {
//     drying();
//   });
// });
// console.log('I am making biryani');
//PROMISE
function washing() {
    console.log('Washing started...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('washing done!');
        }, 5000);
    });
}
function soaking() {
    console.log('Soaking started...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Soaking done!');
        }, 3000);
    });
}
function drying() {
    console.log('Drying started...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Drying done!');
        }, 2000);
    });
}
// THEN CATCH
// washing()
//   .then((value) => {
//     console.log(value);
//     return soaking();
//   })
//   .then((value) => {
//     console.log(value);
//     return drying();
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// ASYNC AWAIT
function runWashingMachine() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result1 = yield washing();
            console.log(result1);
            const result2 = yield soaking();
            console.log(result2);
            const result3 = yield drying();
            console.log(result3);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            console.log('I will run anyway!');
        }
    });
}
console.log('folding laundry');
runWashingMachine();
console.log('I am making biryani...');
