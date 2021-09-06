// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().


function reverseArr(arr)
{
    var temp;
    for(var i=1;i<=arr.length/2;i++)
    {
        temp=arr[i-1]
        arr[i-1]=arr[arr.length-i]
        arr[arr.length-i]=temp
    }
    return arr
}
a=[1,2,3,4]
b=[1,2,3]
c=[2,3,4,5,6,7,8,9]
console.log(reverseArr(a))
console.log(reverseArr(b))
console.log(reverseArr(c))

// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
// change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.

function rotateArr(arr, shiftBy){
    var moves;
    if (shiftBy > 0) {
        moves = shiftBy % arr.length;
    }
    else {
        moves = Math.abs(shiftBy) % arr.length;
    }
    if (shiftBy > 0) {
        for (var i = 0; i < moves; i++) 
        {
            var temp = arr[arr.length - 1];
            for (var k = arr.length - 2; k >= 0; k--)
            {
                arr[k+1] = arr[k];
            }
            arr[0] = temp;
        }
    } else {
        for (var i = 0; i < moves; i++) {
            var temp = arr[0];
            for (var k = 1; k < arr.length; k++) {
                arr[k-1] = arr[k];
            }
            arr[arr.length - 1] = temp;
        }
    }
    return arr
}

a=[1,2,3,4]
b=[1,2,3]
c=[2,3,4,5,6,7,8,9]
console.log(rotateArr(a,1))
console.log(rotateArr(b,2))
console.log(rotateArr(c,3))

// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.
function codeBreak(arr, min, max){
    for(var i=0; i<arr.length;i++){
        if(arr[i]< min || arr[i] >max){
            arr[i]="Outside of Range"
        }
        else
        {
            continue;
        } 
    }
    return arr
}

a=[1,2,3,4,5]
b=[1,2,3,56,67,790]
c=[2,3,4,5,6,7,8,9]
console.log(codeBreak(a,3,5))
console.log(codeBreak(b,5,100))
console.log(codeBreak(c,5,7))



// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function arrConcat(arr, arr2){
    var newArr=[];
    var j=0
    for(var i =0;i < arr.length + arr2.length; i++)
    {
        if( i>= arr.length){
            newArr[i]=arr2[j];
            j+=1
            continue;
        }
        newArr[i]=arr[i];
    }
    return newArr;
}
var a=[1,2,3,4];
var b=['a','fredo', true];
var c=[2,3,4,5,6,7,8,9];
console.log(arrConcat(a,b));
console.log(arrConcat(b,c));
console.log(arrConcat(a,c));



