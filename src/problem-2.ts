{
    // remove duplicate elements
    //This code i do with using filter & indexOf Method...val=value,when filter method debug first property its also check index === value then its returns output 



    function removeDuplicates(num: number[]): number[] {
        return num.filter((val, index) => num.indexOf(val) === index)
    }
    // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))

}