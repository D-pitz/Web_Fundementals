// 1.
// function get255(){

//     var arr = []

//     for(var i = 1; i < 256; i++){
//         arr.push(i)
//     }
//     return arr
// }

// console.log(get255())
// ----------------------------------------------------------

// 2.

// function even1000(){

// var sum = 0

//     for(var i = 1; i < 1001; i++){
//         if (i%2 === 0){
//             sum += i
//         }
//     }
//     return sum
// }

// console.log(even1000())
// // ------------------------------------------------------------

// 3.

// function odd5000(){

//     var sum = 0

//     for(var i = 1; i <= 5000;i++){
//         if (i%2 === 1){
//             sum += i
//         }
//     }
//     return sum
// }
// console.log(odd5000())
// ----------------------------------------------------------

// 4.

// var array = [10, 5, -30, 50]

// function iteratearr(arr){

//     var sum = 0

//     for(var i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }

// console.log(iteratearr(array))

// 5.

// arr1 = [21,-3,45,3,5,7]

// function max(arr){

//     var max = arr[0]

//     for(var i=0; i<arr.length;i++){
//         if (arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max
// }

// console.log(max(arr1))
// ----------------------------------------------------------------

// 6.

// var arr = [1,3,5,7,20]

// function average(arr){

//     var sum = 0

//     for(var i=0; i<arr.length;i++){
//         sum += arr[i]
//     }
//     return sum / arr.length
// }

// console.log(average(arr))
// -----------------------------------------------------------------

// 7.

// function odd50(arr){

//     arr = []

//     for(var i=1; i<50; i++){
//         if (i%2 === 1){
//             arr.push(i)
//         } 
//     }
//     return arr
// }

// console.log(odd50())
// -------------------------------------------------------------------------

// 8.

// var array =  [10, -1, 1, 3, 5, 7]

// function greaterY(arr,Y){

//     count = 0

//     for(var i=0; i<arr.length;i++){
//         if (arr[i] > Y){
//             count++
//         }
//     }
//     return count
// }

// console.log(greaterY(array,3))
// ------------------------------------------------------------------------

// 9.

// var array =  [1, 3, 5, 7]

// function square(arr){

//     for(var i=0; i<arr.length;i++){
//         arr[i] = arr[i] * arr[i]
//     }
//     return arr
// }

// console.log(square(array))
// ----------------------------------------------------------------------

// 10.

// var array = [1,5,10,-2]

// function zero(arr){

//     for(var i=0; i <arr.length;i++){
//         if (arr[i] < 0){
//             arr[i] = 0
//         }
//     }
//     return arr
// }

// console.log(zero(array))
// ------------------------------------------------------------------------

// var array = [1,5,10,-2]

// function maxMinAvg(arr){

//     var max = arr[0]
//     var min = arr[0]
//     var sum = 0
//     newarr = []

//     for(var i=0; i<arr.length;i++){
//         sum += arr[i]

//         if (arr[i] > max){
//             max = arr[i]
//         }
//             if (arr[i] < min){
//                 min = arr[i]
//             }
//     }
//     newarr = [max,min,sum/arr.length]
//         return newarr
// }

// console.log(maxMinAvg(array))

// 12.

// var arr = [1,5,10,-2,77]

// function swap(){

//     var first = arr[0]
//     var temp = arr[arr.length-1]

//     arr[0] = temp
//     arr[arr.length-1] = first

//     return arr
// }

// console.log(swap(arr))

// 13.

var array = [1,-77,10,-2,77]

function dojo(arr){

    for(var i=0; i<arr.length;i++){
        if (arr[i] < 0){
            arr[i] = 'Dojo'
        }
    }
    return arr
}

console.log(dojo(array))
