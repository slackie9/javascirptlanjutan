// function init() {
//     // let nama = "Sandika";

//     return function (nama) {
//         console.log(nama);
//     };
// }
// let panggilNama = init();
// panggilNama("Slackie");
// panggilNama("Mayuki");

// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
//     };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");

// // selamatPagi("Slackie");
// // selamatMalam("Mayuki");

// console.dir(selamatMalam("Slackie"));

let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    };
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
