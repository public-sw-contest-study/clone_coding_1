const a = 5;

console.log(a + 2);
console.log(a * 2);
console.log(a / 2);

const b = [1,2,3,4,5];
console.log(b);
console.log(b[2]);
b.push("101");
console.log(b);

const c = {
    name: "kosw",
    points: 10,
    fat: true,
};

console.log(c);
console.log(c.name);

function d() {
    console.log("hello");
}
d();

const age = 10;
function e(cnt) {
    return cnt + 2;
}
const krage = e(20);
console.log(krage);

const age2 = prompt("how old?");
console.log(typeof "15", typeof parseInt("15"));