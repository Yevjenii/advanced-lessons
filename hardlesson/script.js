let num = 266219;
let result = 1;
num = num.toString();
for (let i = 0; i < num.length; i++) {
    result = result * num[i];
}
console.log(result);
result = result**3;
console.log(result);
result = result.toString();
console.log(result[0] + result[1]);

