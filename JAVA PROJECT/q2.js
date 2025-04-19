// function convertLength(value, fromUnit, toUnit) {
//     const unitsInMeters = {
//         meters: 1,
//         kilometers: 1000,
//         miles: 1609.34,
//         feet: 0.3048,
//         inches: 0.0254,
//         centimeters: 0.01,
//         millimeters: 0.001,
//         yards: 0.9144
//     };

//     if (!unitsInMeters[fromUnit] || !unitsInMeters[toUnit]) {
//         throw new Error("Unsupported unit");
//     }

//     const valueInMeters = value * unitsInMeters[fromUnit];

//     const convertedValue = valueInMeters / unitsInMeters[toUnit];

//     return convertedValue;
// }
// console.log(convertLength(5, 'kilometers', 'miles'))
