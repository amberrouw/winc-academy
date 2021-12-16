//Hey kiddo

const adult = function(number) {
    const age = number >= 18;
    return age;
};

const greeting = function (number) {
    const checkAdult = adult(number);
    if (checkAdult === true) {
        console.log("Hey there");
    } else {
        console.log("Hey kiddo");
    };
    return checkAdult;
};

greeting(8);


// VAT calculations
// VAT exercise 1

const calculateinclVat = function (price, vat) {
    return price * vat;
};

const vatAmount = function (price, vat) {
    const priceInclVat = calculateinclVat(price, vat);
    const calculateVatAmount = priceInclVat - (priceInclVat / vat);
    return console.log(calculateVatAmount);
};

vatAmount(1000, 1.21);

//VAT exercise 2

const calculateBasePrice = function (price, vat) {
    return price / vat;
};

const arrayVat = function (price, vat) {
    const basePrice = calculateBasePrice(price, vat);
    const calculateVatAmount = price - (price / vat);
    const makeArrayVat = [basePrice, calculateVatAmount];
    return console.log(makeArrayVat);
};

arrayVat(1210, 1.21);
