// 2.1 execution context, hoisting & scope

// var nama = "slackie";
// console.log(nama);

// creation phase pada Global Contex
// nama var = undifined
// nama function = fn()
//hoisting
// window = global object
// this = window

// execution phase
// console.log(sayHello());

// var nama = "slackie";
// var umur = 32;

// function sayHello() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun`;
// }

// function membuat local execution contex
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = "slackie";
// var username = "@slackie";

// function cetakURL() {
//     console.log(arguments);
//     var instagramURL = "http://instagram.com/";
//     return instagramURL + username;
// }

// console.log(cetakURL("@dodyferdian", "@mayuki"));

// function a() {
//     console.log("ini a");

//     function b() {
//         console.log("ini b");

//         function c() {
//             console.log("ini c");
//         }
//         c();
//     }
//     b();

function satu() {
    var nama = "Sandika";
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = "Erik";
satu();
dua("Doddy");
console.log(nama);
