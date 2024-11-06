{

// first of all the question looks little bit tricky but i handle it by using type-guards
interface Circle{
    shape: "circle",
    radius:number
}
interface Rectangle{
    shape: "rectangle",
    width: number,
    height: number
}
type size =  Circle | Rectangle; 
function calculateShapeArea(Shape: size){
    if(Shape.shape === "circle"){
        const value = Math.PI * (Shape.radius * Shape.radius);
        return  value.toFixed(2)
    }
    else if(Shape.shape ==='rectangle'){
        const value = (Shape.width * Shape.height);
        return value
    }
    else{
        return console.error(`Please use number`);
        
        
    }

}


const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
console.log(circleArea);
console.log(rectangleArea)
    
}