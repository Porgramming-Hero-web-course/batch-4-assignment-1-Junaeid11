{
    interface Person {
        name: string,
        age: number,
        email: string
    }
    function validateKeys<T>(obj: T , keys: (keyof T)[]){
    

      }

    
    
    // const person: Person = {
    //     name: "Alice",
    //     age: 25, 
    //     email: "alice@example.com"
    // };
    // console.log(validateKeys(person, ["name", "age"]));


}