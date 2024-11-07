{

    // I used in filter or split to doing this first i complete it toLowerCase() then sentence split then word tolowercase() the i filter it..thats it

    function countWordOccurrences(sentence: string, word: string): number {
        const firstSentence = sentence.toLowerCase().split(" ");
        const lastWord = word.toLowerCase();
        return firstSentence.filter(w => w === lastWord).length;
    }
    // console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));
}   