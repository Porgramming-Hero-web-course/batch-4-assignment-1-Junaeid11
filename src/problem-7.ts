{
// class property and used constructor ..i used date() for find year property


class Car{
   name: string;
   model:string;
   year: number

   constructor(name:string, model: string,year:number){
    this.name = name;
    this.model = model;
    this.year = year
   }
   getCarAge(): string{
    const currentYear = new Date().getUTCFullYear();
    const updateYear = currentYear - this.year
    return `${updateYear} (assuming current year is ${this.year})`
   }


}
const car = new Car("Honda", "Civic", 2018);
// console.log(car.getCarAge());





}