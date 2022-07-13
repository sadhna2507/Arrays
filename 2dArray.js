// let nums = [1,2,3,4,5]
// let count = 0;
// for (let i = 0; i<nums.length; i++){
//     for( let j=0; j<nums.length; j++){
//         console.log(`${++count} ==> ${nums[i]} ------->${nums[j]}`)
//     }
// }



// find the pairs whose sum is equal to target(unsorted)

// let nums = [2,3,5,7,8,6]
// let target = 9

// let left =0;
// let right = nums.length-1

// while(left < right){
//     if(nums[left] + nums[right] == target){
//         console.log(nums[left], nums[right]);
//         left += 1;
//         right -= 1;
//     }else if(nums[left] + nums[right] > target) {
//         right -= 1
//     }else {
//         left += 1
//     }
// }


// find the pairs whose sum is equal to target(sorted)

// let nums = [2,3,5,6,7,8]
// let target = 9

// let left =0;
// let right = nums.length-1

// while(left < right){
//     if(nums[left] + nums[right] == target){
//         console.log(nums[left], nums[right]);
//         left += 1;
//         right -= 1;
//     }else if(nums[left] + nums[right] > target) {
//         right -= 1
//     }else if (nums[left] + nums[right] < target){
//         left += 1
//     }
// }


// <============================================== 2D ARRAY =====================================>
// finding the i & j positions of elements of array
// let nums = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// for(let i=0; i<3; i++) {
//     for(let j=0; j<3; j++) {
//         console.log(`${i} ${j} --> ${nums[i][j]}`);
//     }
// }


// finding the i & j positions of elements of array if no. of Columns differ

// let nums = [
//     [1,2,3,10],
//     [4,5,6,20],
//     [7,8,9,30]
// ]
// for(let i=0; i<3; i++) {
//     for(let j=0; j<4; j++) {
//         console.log(`${i} ${j} --> ${nums[i][j]}`);
//     }
// }






// let nums = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// console.log(nums.length,nums[2]);

// let rows = nums.length; // TO  FIND THE LENGTH OF ROW

// let cols = nums[2].length;// TO FIND THE LENGTH OF COLUMN

// for(let i=0; i<3; i++) {
//     for(let j=0; j<3; j++) {
//         console.log(`${i} ${j} --> ${nums[i][j]}`);
//     }
// }


// MATRIX

// let matrix = [
//     [1,  2,  3,  4],
//     [5,  6,  7,  8],
//     [9,  10, 11, 12],
//     [13, 14, 15, 16]
// ]
// console.log(matrix[2][2]); //printing a particular value

// let rows = matrix.length;  // printing no. of rows
// console.log(rows);

// let column = matrix[0].length;  // printing no. of column
// console.log(column);
 


// sum of matrix
// let matrix = [
//     [1,  2,  3,  4],
//     [5,  6,  7,  8],
//     [9,  10, 11, 12],
//     [13, 14, 15, 16]
// ]

// let rows = matrix.length;
// let cols = matrix[0].length;

// let sum = 0;
// for (let i=0; i<rows; i++){
//     for(let j=0; j<rows; j++){
//         if(matrix[i] == matrix[j]){
//             sum += matrix[i][j]
//         }
        
//     }
// }
// console.log(sum);


//USING ONE LOOP ONLY
// let matrix = [
//     [1,  2,  3,  4],
//     [5,  6,  7,  8],
//     [9,  10, 11, 12],
//     [13, 14, 15, 16]
// ]

// let rows = matrix.length;
// let cols = matrix[0].length;

// let sum = 0;
// for (let i=0; i<rows; i++){
//     sum += matrix[i][i]

// }
// console.log(sum);


// <=================================SUM OF ROWS, COLS, DIAGONALS====================================================>
// columns sum

// let matrix = [
//     [1,  2,  3,  4],
//     [5,  6,  7,  8],
//     [9,  10, 11, 12],
//     [16, 14, 15, 16]
// ]

// let rows = matrix.length;
// let cols = matrix[0].length;
// let sum = 0;
// let start = 3;

// for (let i=0; i<rows; i++){
//     sum += matrix[i][start]

// }
// console.log(sum);


// rows sum
// let matrix = [
//     [1,  2,  3,  4],
//     [5,  6,  7,  8],
//     [9,  10, 11, 12],
//     [16, 14, 15, 16]
// ]

// let rows = matrix.length;
// let cols = matrix[0].length;
// let sum = 0;
// let start = 3;

// for (let i=0; i<rows; i++){
//     sum += matrix[start][i]

// }
// console.log(sum);




// //Printing diagonal (1+6+11+12=34)
// let matrix = [
//     [1,  2,  3,  4],
//     [5,  6,  7,  8],
//     [9,  10, 11, 12],
//     [16, 14, 15, 16]
// ]

// let rows = matrix.length;
// let cols = matrix[0].length;
// let sum = 0;
// let start = 0;

// for (let i=0; i<rows; i++){
//     sum += matrix[i][start]
//     start +=1
// }
// console.log(sum);


//Printing diagonal (4+7+10+16=37)
// let matrix = [
//     [1,  2,  3,  4],
//     [5,  6,  7,  8],
//     [9,  10, 11, 12],
//     [16, 14, 15, 16]
// ]

// let rows = matrix.length;
// let start = matrix[0].length - 1;
// let sum = 0;

// for (let i=0; i<rows; i++){
//     sum += matrix[i][start]
//     start -=1
// }
// console.log(sum);



//SNAKE PATTERN (1,2,3,4,8,7,6,5,9,10,11,12,16,15,14,13)
let matrix = [
    [1,  2,  3,  4],
    [5,  6,  7,  8],
    [9,  10, 11, 12],
    [13, 14, 15, 16]
]
