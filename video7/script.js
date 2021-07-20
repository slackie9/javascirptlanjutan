// function expression

// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// };
// console.log(tampilNama("slackie"));

// const tampilNama = (nama) => {
//     return `Halo, ${nama}`;
// };

// console.log(tampilNama("slackie"));

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// };

// console.log(tampilNama("slackie", "malam"));

// implisit return
// const tampilNama = (nama) => `Halo, ${nama}`;

// const tampilNama = () => `Hello World`;
// console.log(tampilNama());

let mahahsiswa = ["slackie", "mayuki", "kashiwagi"];

// let jumlahHuruf = mahahsiswa.map(function (nama) {
//     return nama.length;
// });

// console.log(jumlahHuruf);

// let jumlahHuruf = mahahsiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahahsiswa.map((nama) => ({ nama, jumlahHuruf: nama.length }));
console.table(jumlahHuruf);
