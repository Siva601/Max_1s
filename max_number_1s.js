function fetchingMax1s(arr){
    let n = arr.length;
    let indexVal = 0;
    let oneCount = 0;
    for (i=0; i < n; i++){
        let tempCount = 0;
        for (let val of arr[i]){
            if (val === 1){
                tempCount += 1;
            }
        }
        if (tempCount > oneCount){
            oneCount = tempCount;
            indexVal = i;
        }
    }
    return indexVal;
}

matrix = [[0, 1, 1, 1],[0, 0, 1, 1],[0, 1, 1, 1],[0, 0, 0, 0]];
console.log(fetchingMax1s(matrix));