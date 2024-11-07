{

    // I used in filter or split to doing this first i complete it toLowerCase() then sentence split then i filter it and param length ..thats it

    function countWordOccurrences(sentence: string, word: string): number {
        const firstSentence = sentence.toLowerCase();
        const lastWord = word.toLowerCase();
        return firstSentence.split(" ").filter(param => param === lastWord).length;
    }
    // console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));
}   