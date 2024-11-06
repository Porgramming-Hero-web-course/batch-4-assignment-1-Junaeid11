{
// i using here forOf loop to sum,when i used total =0 ,in function 0+1[0 index]=1,then 1+2[1 index]=3..continuously looping and final output 

function sumArray(number: number[]): number{
    let total = 0;
    number.forEach(num =>{
        total += num
    });
    return total

}
// console.log(sumArray([1, 2, 3, 4, 5]));
    
}