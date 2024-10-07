

// clonning of forEach

function forEachCustome(arr,custome) {
    for(int i = 0; i < arr.length; i++) {
        custome(arr[i],i,arr);
    }
}

function custome(val,index,arr) {

    console.log(val);
    console.log(index);
    console.log(arr);

    return val;

}



