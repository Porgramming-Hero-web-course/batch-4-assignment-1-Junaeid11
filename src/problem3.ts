{
    function countWordOccurrences(sentence:string , word: string): number{
           const words =sentence.toLowerCase().split(/\W/);
           return words.filter(w => w === word.toLowerCase()).length;
    }
    console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));
}   