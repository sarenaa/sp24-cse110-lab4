### If the question has you write any code, unless specified otherwise, create a JavaScript file with the name format partX-questionY.js. So for example, if the question was number 14 in part 1 you would have part1-question14.js as your filename. You can run and test these js files with Node from your command line by executing the command “node filename.js”. Make sure that your answer numbers in your markdown files match our answer numbers as you might skip some if one is a question where you write code.

1. Line 12 prints the last value of i from the for loop. i is a global variable. Type var has no block scope.
2. Line 13 prints the last discounted price from the for loop. discountedPrice is a global variable. 
3. Line 14 prints the last finalPrice from the for loop. finalPrice is a global variable.
4. The function returns the discounted array that contains all the finalPrices. discounted is a global variable, and the for loop pushes finalPrices to it.
5. Line 12 prints an error since i is not a global variable. i is type let, and only visible in the for loop.
6. Line 13 prints an error since discountedPrice is not a global variable. discountedPrice is type let, and only visible in the for loop.
7. Line 14 prints the last finalPrice from the for loop. finalPrice is in the block scope of the print statement.
8. The function returns the discounted array that contains all the finalPrices. discounted is in the block scope of the return statement. 
9. Line 11 prints an error. i is type let and only visible in the for loop.
10. Line 12 prints prices.length. const length is in the block scope of the print statement.
11. This function returns the empty discounted array. const discounted's value cannot be changed since it was 1st declared empty.

## Given the above Object, write the notation for:  (These should be in your part2.md).

12. see .js file

13a. 32. js concatenates resulting in 32.
b. 1. js converts the string '3' to a number then subtracts.
c. 3. Adding a number to null results in the number.
d. 3. Concatenating a string to null results in the string.
e. 4. True is equal to 1 in js.
f. 0. False is equal to 0 in js.
g. 3undefined. Concatenating means undefined is converted to a string'undefined'.
h. NaN. Subtracting means 'undefined' is converted to not a number.

14a. true. js converts the string '2' to a number.
b. true. the 1st character of the left string '2' is alphabetically less than the 1st character of the right string '1'.
c. true. == performs type conversion. '2' is converted to 2, now both sides have the same value.
d. false. === does not convert types. Both sides have different types.
e. false. true = 1 in js. So 1 == 2 will be false.
f. true. Boolean(anything that isn't 0,null, undefined, Nan, "") = true. So true == true.

15. == performs type coercion. 2 variables can be equal even if their type is different.  '2' == 2 returns true.
=== does not perform type coercion, 2 things must have the same value and be the same type to be equal.'2' === 2 returns false.

17. [2,4,6]. modifyArray takes in an array and a callback function. It iterates over each element in the array and applies the callback function on each element. The result [2,4,6] is stored in a new array.

18. see js file

19. The function prints 1, 3, 4, 2. Console.log(1) prints 1st. Console.log(2) is delayed by 1000 milliseconds so console.log(3 and 4) are printed before.

