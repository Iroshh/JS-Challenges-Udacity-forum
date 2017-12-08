//TASK 1

function multiplyTrio(x, y, z) {
    return x * y * z;
}

console.log(multiplyTrio(77, 10, 5));

//TASK 2

console.log(multiplyTrio(8, 4, 10));

//TASK 3

function maxOf2(a, b) {
    return (a > b) ? a : 
    (a < b) ? b : 
    ("Both numbers are equal to " + a);
}

console.log(maxOf2(10, 10)); 
console.log(maxOf2(22, 10));

//TASK 4

function mystery(x, y) {
    return (4 * x * y) + (3 * y + 5);
}

console.log(mystery(2, 3));

//TASK 5

function feedPerRanger(sheepPopulation, rangersPerDay) {
    
    if (rangersPerDay > 0) {
        var feedAmountPerRanger = (sheepPopulation * 2) / rangersPerDay;
        alert("Each Park Ranger should load" + " " + feedAmountPerRanger + "lbs of feed today.")
    }else {
        alert("Oops! No rangers today. Sheeps will probably stay hungry today :(");
    }
}
    
    feedPerRanger(50, 10);

//TASK 6: I ADDED TOTAL AMOUNT OF GENERATORS BECAUSE IT CANNOT BE ENDLESS

/* totalPower - total power generated;
   
   genId - generator ID for the current generator;
   
   genStatus - generator status ("on" ot "off");
   
   powerAmount - the amount of power produced by the current generator;
   
   totalGen - total amount of generators;

*/

function changePowerTotal(totalPower, genId, genStatus, powerAmount, totalGen) {
    
    for(genId == 1; genId <= totalGen; genId++)
    if(genStatus === "on"){
        totalPower += powerAmount;
        alert("Generator #" + genId + " is now on, adding " + powerAmount + " MW, for a total of " + totalPower + " MW!");
    } else {
        alert("Generator #" + genId + " is now off, removing " + powerAmount + " MW, for a total of " + totalPower + " MW!");
    }
    return totalPower;
}
