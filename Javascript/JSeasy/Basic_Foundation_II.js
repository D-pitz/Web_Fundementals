// 1.

// var array = [-1,3,5,-5]

// function big(arr){

//     for(var i=0;i<arr.length;i++){
//         if (arr[i] > 0){
//             arr[i] = 'big'
//         }
//     }
//     return arr
// }

// console.log(big(array))
// -------------------------------

// 2.

// var array = [-1,3,5,-5]

// function lowHigh(arr){

//     var low = arr[0]
//     var high = arr[0]

//     for(var i=0; i<arr.length;i++){
//         if (arr[i] < low){
//             low = arr[i]
//         }
//             if (arr[i] > high){
//                 high = arr[i]
//             }
//     }
//     console.log (low)
//     return high
// }

// console.log(lowHigh(array))
// ---------------------------------

// 3.

// array = [-1,3,5,-5]

// function highPop(arr){
    
//     var last2nd = arr[arr.length-2]
//     console.log(last2nd)

//     for(var i =0; i<arr.length;i++){
//         if (arr[i]%2 === 1 || arr[i]%-2 === -1)
//         return arr[i]
//     }
    
// }

// console.log(highPop(array))
// ------------------------------------------------

// 4.

// var arr = [2,4,6,8]

// function double(){

//     var newarr = []

//     for(var i=0;i<arr.length;i++){
//         newarr.push(arr[i] *2)
//     }
//     return newarr
// }

// console.log(double(arr))
// ----------------------------------------------------------

// 5.

// var array = [1,-2, 4, -3, 6]

// function countpos(arr){

//     var count = 0

//     for(var i=0; i<arr.length;i++){
//         if (arr[i] > 0){
//             count++
//         }
//     }
//     arr[arr.length-1] = count
//     return arr
// }

// console.log(countpos(array))

// 6.

// var array = [2, 4, 6, 10, 33, 6, 1,1,1]

// function inrow(arr){

//     var counteven = 0
//     var countodd = 0

//     for(var i=0;i<arr.length;i++){
//         if (arr[i]%2 === 0){
//             counteven += 1
//         }
//             else {
//                 counteven = 0
//             }
//             if (counteven == 3){
//                 console.log('even more so!')
//             }
//         if (arr[i]%2 === 1){
//             countodd += 1
//         }
//             else {
//                 countodd = 0
//             }
//             if (countodd === 3){
//                 console.log('Thats odd!')
//             }
//     }
// }

// console.log(inrow(array))
// ---------------------------------------------

// 7.

// var array = [2, 4, 6, 10, 33, 6,]

// function addOther(arr){
//     for(i=0;i<arr.length;i++){
//         if (i%2 === 1){
//             arr[i]+=1
//         }
//         console.log(arr[i])
//     }
//     return arr
// }

// console.log(addOther(array))
// ----------------------------------------------

// 8.

// array = ["hello", 'dojo', "awesome",'totally']

// function stringLength(arr){

//     for(var i=arr.length-1;i>0;i--){
//         arr[i] = arr[i-1].length
//     }
//     return arr
// }

// console.log(stringLength(array))
// -----------------------------------------------

// 9.

// array = [1,2,3]

// function add7(arr){
//     var newArr = []

//     for(var i=0;i<arr.length;i++){
//         newArr.push(arr[i] + 7)
//     }
//     return newArr
// }

// console.log(add7(array))
// ---------------------------------------------------

// 10.

// var array = [3,1,6,4,2,9]

// function swap(arr){

//     var last = arr.length-1
//     length = arr.length /2
    
    
//     for(var i=0;i<length;i++){
//         var temp = arr[i]
//         arr[i] = arr[last-i]
//         arr[last-i] = temp
//     }
//     return arr
// }

// console.log(swap(array))
// ------------------------------------------

// 11.

// var array = [1,-3,5]

// function negative(arr){

//     var newArr = []

//     for(var i=0;i<arr.length;i++){
//         if (arr[i] > 0){
//             newArr[i] = arr[i] - arr[i]*2
//         }
//             else newArr[i] = arr[i]
//     }
//     return newArr
// }
// console.log(negative(array))
// ---------------------------------------------------

// 12.

// var array = ['person','food', 'place','food', 'thing']

// function hungry(arr){

//     var count = 0

//     for(var i=0;i<array.length;i++){
//         if (arr[i] == 'food'){
//             console.log('yummy')
//                 count++
//         }
//     }
//     if (count == 0){
//         console.log('im hungry')
//     }
// }

// console.log(hungry(array))
// ------------------------------------------------------

// 13.

// var array = [1,2,3,4,5,6]

// function swapCenter(arr){

//     var last = arr.length-1
//     length = arr.length /2
    
    
//     for(var i=0;i<length;i+=2){
//         var temp = arr[i]
//         arr[i] = arr[last-i]
//         arr[last-i] = temp
//     }
//     return arr
// }

// console.log(swapCenter(array))
// ----------------------------------------------------------

// 14.

// var array = [1,2,3,4,5,6]

// function scale(arr,num){

//     for(var i=0; i<arr.length;i++){
//         arr[i] = arr[i] * num
//     }
//     return arr
// }

// console.log(scale(array,2))







