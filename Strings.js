// <===================================================spread operator=========================================>

// let nums1 = [1,2,3]
// let nums2 = [4,5,6]

// console.log(nums1.concat(nums2))
// console.log(nums1)

// console.log([...nums1,'sadhna', ...nums2])//wrwp inside an array([]), else we cannot use it again
// console.log(nums1, nums2)

// console.log(...nums1,...nums2);


// let nums1 = [1,2,3]
// let nums2 = [...nums1]
// console.log(nums1)        // original value does not change






// <======================================TEMPLATE LITERAL================================>

// let fname = 'sadhna'
// let lname = 'khairia'
// console.log(fname + ' ' + lname)
// console.log(`'${fname.length}' "${lname}"`)// .length gives the length of the string


        //    STRINGS ARE IMMUTABLE//


// string woun't allow to change us a single value but change whole string
// let fname = 'sadhna'
// fname[1] = 'j'    // wont work
// fname ='j'           // work
// console.log(fname);

// for(let i=0; i<fname.length; i++){
//     console.log(fname[]);
// }

// let fname = 'sadhna'
// let lname = 'sadhna'
// console.log(fname==lname) // gives true incase strings only but not in array


// extract some values fron string
// let name = 'sadhnakhairia'
// console.log(name.slice(0,6));

// let name = 'sadhnakhairia'

// console.log(name.charAt(13)); // will give empty space
// console.log(name[13]); //  will give undefined


// let name = 'sadhnakhairia'
// console.log(name.slice(6)); // one value means start from this index and print whole value


// let names = 'sadhnakhairia'
// console.log(names.substr(3,4)); //in substr 2nd value gives the lenth that we want to print

// let names = 'sadhnakhairia'
// console.log(names.toUpperCase());  // tTO CHANGE WHOLE STRING IN UPPERCASE


// let names = 'sadhnakhairia'
// console.log(names.toLowerCase());  // tTO CHANGE WHOLE STRING IN LOWERCASE


// eleminating the space before and after the word we use trim

// let names = '             sadhnakhairia           '

// console.log (names, names.trim());
