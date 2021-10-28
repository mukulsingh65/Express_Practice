//Algorithm
//----------------------------------------------------------------
/* step1: make a function which have the array 
step2: make the array length
step3: take a empty array like newArray
step4: make a loop in which it starts with the end of the array and runs till the (i>=0) 
step5: push the elements of original array into the newArray in reverse position
step6: return newArray
step7: end */ 

function reverseArray(array) {
    var newArray = [];
    for(var i=array.length-1; i>=0;i--){
        newArray.push(array[i]);
    }
    return newArray;

}
let array = [1,2,3,4,5,6,7];
reverseArray(array);


// time complexity O(n)