// let bandNumber = 1;

// const takeNumber = function (bandName) {
//     console.log(`${bandNumber}. ${bandName}`);
//     bandNumber+=1;
// }

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console

let bandNumber = 0;

const takeNumber = function (bandName) {
    bandNumber+=1;
    return `${bandNumber}. ${bandName}`;
    
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console
