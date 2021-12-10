//paint wall fucntion no arguments
/*
const paintWalls = function () {
    console.log("The wall has been painted red");
}

paintWalls();
*/
/*
const paintWalls = function (colorPaint) {
    console.log("The wall has been painted " + colorPaint);
}


const color = "green";
will put green on the end of the string


const color = "blue";

paintWalls(color);
*/
//if you call the function without an argument it will print The wall has been painted undefined

const paintWalls = function (colorPaint, whichWall) {
    console.log("The " + whichWall + " wall has been painted " + colorPaint);
}

const color = "blue";
const wall = "south-east";

paintWalls(wall, color);
paintWalls(color, wall);

/*
The order of the arguments matter.
If you change them it will print The blue wall has been painted south-east
If you change the order then paintWalls(color, wall) will print The south-east wall has been painted blue
*/