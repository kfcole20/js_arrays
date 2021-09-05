function minToFront(arr){
    var min=arr[0];
    var tempArr=[];
    for(var i=0;i < arr.length;i++)
    {
        if(arr[i]< min){
            min=arr[i]
        }
    }
    for( var i=0; i<arr.length; i++)
    {
        if(i==0){
            tempArr[i]=min;
            continue;
        }
        if(arr[i]==min){
            tempArr[i]=arr[i-1]
            continue;
        }
        tempArr[i]=arr[i-1]
    }
    return tempArr
}
a=[2,3,4,5,1]
b=[32, 43, 2, 490, 1]
console.log(minToFront(a))
console.log(minToFront(b))