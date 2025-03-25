let side1 = 180

let side2 = 180

let side3 = 180

if (side1 === side2 && side2 === side3){console.log("Equilateral triangle");
}
else if (side1 === side2 || side1 === side3 || side2 === side3){console.log("Isosceles triangle");
}
else{
    console.log("scalene triangle")
}
