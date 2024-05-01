//Given the above Object, 
//write a for...in loop that will iterate through it 
//and print out the value of the property if the 
//property starts with the letter r, 
//or if the value of that property is an odd number. 
// (This should be in a JS file part2-question16.js)

for(const car in statistics){
    if(car.startsWith('r') || statistics[car] % 2 == 0)
    console.log(`statistics.${car} = ${statistics[car]}`);
}