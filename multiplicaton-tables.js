let multiplier = 9;
for (let i = 1; i <= 10; i++) {
    let result = multiplier * i;
    console.log(`${i} x ${multiplier} = ${result}`);
}

for (let multiplier = 1; multiplier <= 10; multiplier++) {
    for (let i = 1; i <= 10; i++) {
        let result = multiplier * i;
        console.log(`${multiplier} x ${i} = ${result}`);
    }
}