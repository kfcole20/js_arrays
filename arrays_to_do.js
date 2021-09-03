// Arrays To Do 1
// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushFront(arr, value)
{
    var newArr=[]
    newArr.push(value)
    for(var i=1;i<arr.length+1;i++){
        newArr[i]=arr[i-1]
    }
    return newArr;
}

a=[2,3,5,6,7]
b=[1,2,4]
c=[2]
console.log(pushFront(a, 1))
console.log(pushFront(b, 8))
console.log(pushFront(c,2))

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().



// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).



// Remove At (Bonus Challenge)
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).



// Swap Pairs (Bonus Challenge)
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.



// Remove Duplicates (Bonus Challenge)
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.


// Second: Solve this without using any nested loops.