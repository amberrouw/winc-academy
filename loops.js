const colors = ["yellow", "blue", "red", "orange"];

let i = 0
 while (colors[i]) {
     console.log("This color is " + colors[i]);
     i++
 }


for (i = 0; i < colors.length; i++) {
    console.log(`This color is ${colors[i]}`);
}


colors.forEach(element => console.log(element));

/*
1. my for and while loops takes in total 8 lines
2. my forEach method take 4 lines
3. the array method is better readable and 
   causes less problems with writing the code. 
4. it is possible you need to use for... in statement
*/

const object = { a:1, b:2, c:3, d:4, e:5}

for (const property in object) {
    console.log(property + object[property]);
};