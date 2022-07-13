//DIFFERENTIATE BETWEEN ARRAY AND OBJECT//

// let people = {
//     0 : 'sadhna',
//     1 : 'mahi',
//     2 : 'piya'
// }

// let nums = ['sadhna', 'mahi', 'piya']

// console.log(Array.isArray(nums), Array.isArray(people))


// let nums = [1, 2, 3, 4, 5, 6]

//print first and last element
// console.log(nums[0], nums[nums.length - 1]);



//    PUSH AND POP IS USED FOR ADDING AND REMOVING THE LAST VALUE IN ARRAY//  TOP OF THE STACK//

// let nums = [1, 2, 3, 4, 5, 6, 7]
//  nums.push(0);
//  console.log(nums);

// console.log('initial', nums);

// console.log(nums.push('sadhna'));// THIS WILL GIVE LENGTH OF ARRAY ONLY

// nums.push('sadhna')

// console.log('adding', nums);

// nums.pop();

// console.log(nums.pop())

// console.log('popping', nums)



// console.log(nums.pop())

// console.log('popping', nums)



// console.log(nums.pop())

// console.log('popping', nums)



// SHIFT AND UNSHIFT ARE USED TO REMOVE AND ADD THE FIRST ELEMENT IN THE ARRAY RESP.//
 
// let nums = ['sadhna', 'mahi', 'piya', 'anu']

// nums.unshift('trisha')
// nums.push('khairia')
// console.log(nums)

// nums.shift()
// nums.pop()
// console.log(nums)



//  DELETING AN ARRAY  not recommended

// let nums = ['sadhna', 'mahi', 'piya', 'anu']

// delete nums[1]
// console.log(nums, nums[1])


//required method to remove all the elements in an array

//BELOW BOTH WILL WORK//
// let nums = ['sadhna', 'mahi', 'piya', 'anu']
// nums.length = 0
// console.log(nums.length, nums);

// let nums = ['sadhna', 'mahi', 'piya', 'anu']
// nums.length = []
// console.log(nums.length, nums);






//   BELOW FIRST WILL WORK BUT NOT SECOND ONE //
// const nums = ['sadhna', 'mahi', 'piya', 'anu']
// nums.length = 0
// console.log(nums.length, nums);

//IN THIS WE ARE REASSINING THE NUM VALUE THATS Y IT WILL GIVE ERROR IN CASE OF CONST//
// let nums = ['sadhna', 'mahi', 'piya', 'anu']
// nums.length = []
// console.log(nums.length, nums);





// ADD ELEMENT AFTER EMPTY ELEMENT//
// let nums = ['sadhna', 'mahi', 'piya', 'anu']
// nums.length = 8
// console.log(nums.length, nums);

// nums.push('somi')
// console.log(nums);







// SPLICE AND SLICE CONCEPT//
// SPLICE TO ADD ELEMENT IN BETWEEN SOMEWHERE IN ARRAY//

// let names = ['sadhna', 'mahi', 'piya', 'anu']
// names.splice(2, 0, 'sachin')
// console.log(names)
// Returns value that we are deleting 
// console.log(names.splice(2, 2, 'sachin'))


// sliced//

// let names = ['sadhna', 'mahi', 'piya', 'anu']
// names.slice(0, 2);
// console.log(names.slice(0, 2));

// let names = ['sadhna', 'mahi', 'piya', 'anu']
// let slicedNames = names.slice(0, 2);
// console.log(names, slicedNames);








// let names = ['sadhna', 'mahi', 'piya', 'anu']
// console.log(names.slice(0, -2));

// let names = ['sadhna', 'mahi', 'piya', 'anu']
// console.log(names.slice(0, -3));

// let names = ['sadhna', 'mahi', 'piya', 'anu']
// console.log(names.slice(1, -1));===============>remove 1st and last value


// let names = ['sadhna', 'mahi', 'piya', 'anu']
// console.log(names.slice(2, -1));
// console.log(names.slice(-4, 3));
// console.log(names.slice(2));
// console.log(names.slice(-2));


// PROGRAM TO FIND THE ELEMENT IS PRESENT IN THE ARRAY OR NOT//
 
// let names = ['sadhna', 'mahi', 'piya', 'anu']

// function findName(name){
//     for (i=0; i<names.length; i++){
//         if (names[i] === name) return true;
//     }
//         return false;
// }
// console.log(findName('piya'));

// INBUILT METHOD TO FIND THE ELEMENT IS PRESENT IN THE ARRAY OR NOT//

// let names = ['sadhna', 'mahi', 'piya', 'anu']
// console.log(names.includes('sany'));
// console.log(names.includes('mahi'));




// First Repeating number//
// let leftHand = [1, 3, 4, 3, 2, 5, 7, 1]
// let rightHand = []

// for (i=0; i<leftHand.length; i++){
//     if (rightHand.includes(leftHand[i])){
//         console.log(leftHand[i]);
//         break
//     }
//     else {
//         rightHand.push(leftHand[i])
//     }
// }


// function elementIndex(arr, element){
//     if(arr.includes('elememt')){
//       return (arr.indexOf('element'))
//     }else{
//       'Not Array'
//     }
//   }
//   console.log(elementIndex([1,2,3,4], 3))
// //   exports.elementIndex = elementIndex


// let arr1 = [1,2,1,2,3,4,2,8,9]
// let newArr1 = []
//   for (let i = 0; i<arr1.length; i++){
//     if(arr1[i]<3){
//       newArr1.push(arr1[i])
//     }
//   }
//   console.log(newArr1)
