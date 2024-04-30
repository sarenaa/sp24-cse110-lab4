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
12. 
a. student.name
b.  student.Grad year ????
c. student.greeting() ???
d. 