// konsep this pada arrow function
// Constructor function
// const Mahasiswa = function () {
//     this.nama = "Slackie";
//     this.umur = 32;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     };
// };

// const slackie = new Mahasiswa();

// arrow function

// const Mahasiswa = function () {
//     this.nama = "Slackie";
//     this.umur = 32;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     };
// };

// const slackie = new Mahasiswa();

// obcject literal

// const mhs1 = {
//     nama: "Slackie",
//     umur: 32,
//     sayHello: () => {
//         // console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//         console.log(this);
//     },
// };

// const Mahasiswa = function () {
//     this.nama = "Slackie";
//     this.umur = 32;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     };
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// };

// const slackie = new Mahasiswa();

const box = document.querySelector(".box");
box.addEventListener("click", function () {
    let satu = "size";
    let dua = "caption";
    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }
    this.classList.toggle("size");
    setTimeout(() => {
        this.classList.toggle("caption");
    }, 600);
});
