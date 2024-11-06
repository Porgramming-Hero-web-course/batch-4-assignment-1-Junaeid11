{
    // i used here keyOf property,also used generic form...basically mentors show me T & K but i used A & B

    interface Person {
        name: string;
        age: number;
    }
    function getProperty<A, B extends keyof A>(person: A, key: B): A[B] {
        return person[key];
    }
    const person: Person = {
        name: 'Alice',
        age: 20,
    }
    // console.log(getProperty(person, "name"));
    // console.log(getProperty(person, 'age'))
}