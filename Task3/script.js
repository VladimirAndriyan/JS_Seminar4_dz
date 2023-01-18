// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// 1.Вариант решения
const randomArr = new Array(5);
let elemSum = 0;
let findElem = 3;
for (let i = 0; i < randomArr.length; i++) {
    randomArr[i] =  Math.floor(Math.random()*10);    
    elemSum += randomArr[i];
}
console.log(randomArr);
console.log(`Сумма элементов массива ${elemSum}`);
let minElem = randomArr[0];
for (let i = 0; i < randomArr.length; i++) {
    if (minElem > randomArr[i]) {
        minElem = randomArr[i];
    }    
}
console.log(`Минимальное число массива ${minElem}`);
for (let i = 0; i < randomArr.length; i++) {
    if (findElem === randomArr[i]) {
        findElem = true;
    }    
}
if (findElem === true) {
    console.log('В данном массиве есть число 3');
} else {
    console.log('В данном массиве нет числа 3');
}

// 2.Вариант решения с использованием функций
// const randomArray = (sizeArr) => {
//     for (let i = 0; i < sizeArr; i++) {
//         randomArr[i] =  Math.floor(Math.random()*10);        
//     }
// }
// const randomArr = [];
// // randomArray(3);
// // console.log(randomArr);

//  const elemSum = (array) => {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         sum += element;                
//     }
//     return console.log(`Сумма элементов массива ${sum}`);;
//  }
// //  console.log(elemSum(randomArr));

//  const findMinElem = (array) => {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];        
//         if (min > element) {
//             min = element;
//         }        
//     }
//     return  console.log(`Минимальный элемент мавссива ${min}`); 
//  }
// //  console.log(findMinElem(randomArr));

//  const findElem = (array,elem) => {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (elem === element) {
//             return console.log(`В данном массиве есть число ${elem}`);
//         }                 
//     }
//     return console.log(`В данном массиве нет числа ${elem}`);
//  }
// //  console.log(findElem(randomArr,3));
// randomArray(4);
// console.log(randomArr);
// console.log(elemSum(randomArr),findMinElem(randomArr),findElem(randomArr,3));