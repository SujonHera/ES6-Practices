const ages = [21, 23, 22, 23, 24, 21];
const ages2 = [26, 23, 21, 23];
const age3 = [32, 35, 32, 42, 31, 32];

const allAges = ages.concat(ages2);
const allAges2 = [...ages, ...ages2, 5, 2, 6]
console.log(allAges2)
console.log(allAges);

const business = 650;
const minister = 450;
const sochib = 250;

let maximum = Math.max(business, minister, sochib);
console.log(maximum);

const takaPoisa = [650, 450, 250];
const maximum2 = Math.max(...takaPoisa);

console.log(maximum2)


var arr = [2, 4, 8, 6, 0];

function max(arr) {
    return Math.max.apply(null,arr);
}

console.log(max(arr));

