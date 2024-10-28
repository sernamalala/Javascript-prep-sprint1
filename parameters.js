function convertToPercentage(num){

    const percentage = `${num*100}%`;
    return percentage;
}

const out1 = convertToPercentage(0.68);
const out2 = convertToPercentage(0.99);

console.log(out1);
console.log(out2);