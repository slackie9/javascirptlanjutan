// create literal object
// didn't efective for lots objeck
// let mahasiswa1 = {
//     nama: "Slackie",
//     energy: 10,
//     makan: function (porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Selamat makan ${this.nama}, selamat makan ${porsi}`);
//     },
// };
// let mahasiswa2 = {
//     nama: "Mayuki",
//     energy: 20,
//     makan: function (porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Selamat makan ${this.nama}, selamat makan ${porsi}`);
//     },
// };

// function Declaration

// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selama makan ${porsi}`);
//     },

//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, eneri kamu berkurang ${jam}`);
//     },

//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, Selamat Tidur ${jam}`);
//     },
// };
// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let slackie = Mahasiswa("Slackie", 10);
// let mayuki = Mahasiswa("Mayuki", 10);

// constractor function
// function Mahasiswa(nama, energi) {
//     this.energi = energi;
//     this.nama = nama;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selama makan ${porsi}`);
//     };

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, eneri kamu berkurang ${jam}`);
//     };
// }

// let slackie = new Mahasiswa("Slackie", 20);
// let mayuki = new Mahasiswa("Mayuki", 10);

// function Mahasiswa(nama, energi) {
//     //let mahasiswa = Object.create(methodMahasiswa);
//     //let mahasiswa = {};
//     //let this = Object.create(Mahasiswa.prototype);
//     this.nama = nama;
//     this.energi = energi;

//     // return mahasiswa;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, Selamat Makan! makan ${porsi}`;
// };

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, Selamat Bermain! main ${jam}`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Hallo ${this.nama}, Selamat tidur !tidur ${jam}`;
// };

// let slackie = new Mahasiswa("Slackie", 10);
// let mayuki = new Mahasiswa("Mayuki", 10);

//versi class

// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }
//     makan(porsi) {
//         this.energi += porsi;
//         return `Halo ${this.nama}, Selamat Makan! makan ${porsi}`;
//     }

//     main(jam) {
//         this.energi -= jam;
//         return `Halo ${this.nama}, Selamat Bermain! main ${jam}`;
//     }

//     tidur(jam) {
//         this.energi += jam * 2;
//         return `Hallo ${this.nama}, Selamat tidur !tidur ${jam}`;
//     }
// }

// let slackie = new Mahasiswa("Slackie", 10);
// let mayuki = new Mahasiswa("Mayuki", 10);

// let angka = [1, 2, 3];

// console.log(angka.reverse());

// let angka = new Array();

// function Array() {
//     let this = Object.create(Array.prototype);
// }
