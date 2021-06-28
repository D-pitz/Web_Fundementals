// 1.Sigma

// function sigma(num){

//     var sum = 0

//     for(var i = 1;i<=num;i++){
//         if (i>0){
//             sum +=i
//         }
//     }
//     return sum
// }

//     console.log(sigma(7))
// -----------------------------------------------

// 2. Factortial

// function factorial(num){
//     var sum = 1

//     for(var i=1;i<=num;i++){
//         if (i>0){
//             sum = sum * i
//         }
//     }
//     return sum
// }

// console.log(factorial(5))
// ----------------------------------------------

// 3. Fibonacci

function Fibonacci(num){

    var sum = 0
    var x = 0
    var y = 1

    for(var i=0; i<num;i++){
            sum = x + y
            y = x
            x = sum
            console.log(sum)
    }
    return sum
}

console.log(Fibonacci(10))
// -------------------------------------------

// 4.

// var array = [42, true, 4, "Liam", 7, 'chris']

// function scdToLast(arr){

//     if (arr.length < 2){
//         return null
//     }
// return arr[arr.length-2]

// }

// console.log(scdToLast(array))
// -------------------------------------------

// 5.

// var array = [5,2,3,6,4,9,7]

// function nToLast(arr,N){

//     if (arr.length<N){
//         return null
//     }
//     return arr[arr.length-N]
// }

// console.log(nToLast(array,3))
// -------------------------------------------

// 6.

// var array = [42,1,4,3.14,7]

// function scdLargest(arr){

//     max = arr[0]

//     if(arr < 2){
//         return null
//     }

//     for(var i=0;i<arr.length;i++){
//         if (arr[i]>=max){
//             max = arr[i]
//             arr[i] = null
//         }
//     }
//     max = null
//     for(var i=0;i<arr.length;i++){
//         if (arr[i]>=max){
//             max = arr[i]
//         }
//     }
//     return max
// }

// console.log(scdLargest(array))
// -------------------------------------------

// 7.

// var array = [4, "Ulysses", 42, false]

// function double(arr){

//     for (var i=0; i<arr.length; i+=2) {
//         arr.splice(i,0,arr[i])
//     }
//     return arr
// }

// console.log(double(array))