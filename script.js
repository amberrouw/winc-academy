const age = 18;

if (age >= 18) {

    console.log("You are welcome inside");

} else {

    console.log("You are to young to come inside");

}

if (age >= 18 && age <= 25) {

    console.log("You get 50% off!");

} else {

    console.log("you aren't a cool kid");
}

const isFemale = true;

if (isFemale) {

    console.log("Welcome to the ladies night");

} else {

    console.log("You can't buy a ticket only females are allowed");

}

const driverStatus = "bob";

if (driverStatus == "bob") {

    console.log("allowed to drive");

} else {

    console.log("not allowed to drive");

}

const firstName = "Sarah";

if (firstName == "Sarah" || firstName == "Bram") {

    console.log("You get a free beer");

} else {
    console.log("you aren't lucky")
}

const totalAmount = 15;

if (totalAmount >= 25 && totalAmount < 50) {

    console.log("you get free (veggie) bitterballen");
} else if (totalAmount >= 50 && totalAmount < 100) {

    console.log("you get a free portion of nachos");

} else if (totalAmount >= 100) {
    console.log("you get a free bottle of champagne");

} else {
    
    console.log("you don't get free items");

}