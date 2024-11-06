{

// I used in filter or split and regular Regular expressions (/\W+/) which is matches non-word characters, i search it from google and i read all documentation about regEx how its work.then i appling op it

    function countWordOccurrences(sentence:string , word: string): number{
        const matchWord = sentence.toLowerCase().split(/\W+/);
        const targetWord = word.toLowerCase();
    return matchWord.filter(w => w === targetWord).length;
    }
    // console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));
}   