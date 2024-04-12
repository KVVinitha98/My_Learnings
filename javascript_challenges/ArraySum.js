/*
function ArraySum(arr) {
    let largeNumber = arr.reduce((large,current)=>{
        if(current >large){
            large = current;
        }
        return large
    },0)

    let newArray = arr.filter((num)=>{
        return num!=largeNumber
    })
    console.log(newArray);
    let total = 0
    for(let n of newArray){
        total+=n;
    }
    console.log(total);
    if (total !== largeNumber)
    return false
  
    
    return true
}

*/

function ArraySum(arr) {
	let tempArr = arr.sort((a, b) => a - b);
	console.log(tempArr);
	let largeNum = tempArr.pop();
	console.log(largeNum);
	console.log(tempArr);
	let total = 0;
	tempArr.forEach((n) => {
		total += n;
	});
	return total == largeNum;
}

console.log(ArraySum([1, 6, 4, 2, 13]));
console.log(ArraySum([1, 2, 4, 34, 22]));
