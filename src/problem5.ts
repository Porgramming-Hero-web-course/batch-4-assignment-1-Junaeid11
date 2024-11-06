{
// i used here keyOf property,also used generic form


interface Person{
    name: string;
    age: number;
}
function getProperty<T, K extends keyof T>(person:T, key:K): T[K]{
    return person[key];
} 
const person: Person ={
    name: 'Alice',
    age:20,
}
// console.log(getProperty(person, "name"));
// console.log(getProperty(person, 'age'))
}