// rest parameter

// function myfunc() {
//     // return `a = ${a}, b =${b}, myArgs = ${myArgs}`;
//     // return myArgs;
//     // return Array.from(arguments);
//     return [...arguments];
// }

// console.log(myfunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//     //     let total = 0;
//     //     for (const a of angka) {
//     //         total += a;
//     //     }
//     //     return total;

//     return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring

// const kelompok1 = ["Slackie", "Mayuki", "Kashiwagi", "Megalomen", "Dracois"];

// const [ketua, wakil, ...anggota] = kelompok1;

// console.log(anggota);

// object destructuring

// const team = {
//     pm: "Slackie",
//     frontEnd1: "Mayuki",
//     frontEnd2: "Kashiwagi",
//     backend: "Megalomen",
//     ux: "Dracois",
//     devOps: "Milky",
// };

// const { pm, ...myTeam } = team;
// console.log(myTeam);

// filter

function filterBy(type, ...values) {
    return values.filter((v) => typeof v === type);
}

console.log(filterBy("boolean", 1, 2, "Slackie", false, 10, true, "Mayuki"));
