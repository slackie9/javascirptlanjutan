// distructuring variable / assigment

// destructuring array

const perkenalan = ["Halo", "nama", "saya", "Slackie"];

// const [salam, satu, dua, nama] = perkenalan;
//skip item
// const [salam, , , nama] = perkenalan;

// console.log(nama);

// swap items

// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// return value pada function

// function coba() {
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

// rest parameter

// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructuring Object

// const mhs = {
//     nama: "Slackie",
//     umur: 32,
// };

// const { nama, umur } = mhs;
// console.log(nama);

// assigment tanpa deklarasi object

// ({ nama, umur } = { nama: "Slackie", umur: 32 });

// console.log(nama);

// assign ke variable baru

// const mhs = {
//     nama: "Slackie",
//     umur: 32,
// };

// const { nama: n, umur: u } = mhs;
// console.log(u);

// memberikan default value

// const mhs = {
//     nama: "Slackie",
//     umur: 32,
//     email: "mail.@default.com",
// };

// const { nama, umur, email = "email@defaut.com" } = mhs;
// console.log(email);

// Memberi nilai dafault + assign ke variable baru

// const mhs = {
//     nama: "Slackie",
//     umur: 32,
//     email: "mail.@default.com",
// };

// const { nama: n, umur: u, email: e = "email@defaut.com" } = mhs;
// console.log(e);

// Rest Parameter

// const mhs = {
//     nama: "Slackie",
//     umur: 32,
//     email: "mail.@default.com",
// };

// const { nama, ...values } = mhs;
// console.log(values);

// memangil field pada object, setelah dikirim sebagai parameter untuk function

const mhs = {
    id: 123,
    nama: "Slackie",
    umur: 32,
    email: "mail.@default.com",
};

function getIdMhs({ id }) {
    return id;
}

console.log(getIdMhs(mhs));
