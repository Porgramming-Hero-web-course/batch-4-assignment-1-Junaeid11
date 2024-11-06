1.The significance of union and intersection types in Typescript.

=>The significance between union and intersection are very important because it's helps type safety any code.In bellow i explained both separately

1.Union:Union type can only use methods and properties that exist on all type od constituent types.The symbol of union shown "|" it can perform conditional checks at runtime to determine which type a union value currently holds using the typeOf operator custom logic

Example:
   let userId: string | number;
   userId = 'user123';
   userId = 123;

Explanation:-We can see this code defines a variable userId ,it can be string or number.using union types we can using code rule one type like string or number




2.Intersection:Intersection types combine multiple types into one.The symbol of intersection is "&".An intersection type combines the structure of two or more types into a single type,its commonly used to define objects that need to implement multiple interfaces or extend multiple classes.Intersection can also be combined with union type



Example:
interface User {
name: string;
}
interface Admin {
role: string;
}

let userAdmin: User & Admin = {
name: 'John Doe',
role: 'admin'
};
Explanation:-In this code we saw there are 2 interface one is User and other i Admin.Both have different pera meter and last we saw a var userAdmin combines both object.The & property declares both condition applied
