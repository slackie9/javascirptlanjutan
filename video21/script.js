// callback
// syncronous callback

// function halo(nama) {
//     alert(`halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt("Masukan Nama : ");
//     callback(nama);
// }

// tampilkanPesan((nama) : alert(`Halo, ${nama}`));

// const mhs = [
//     {
//         nama: "Slackie",
//         nim: "062406104",
//         email: "slackie@mail.com",
//         jurusan: "Computer Science",
//         idDosenWali: 1,
//     },
//     {
//         nama: "Mayuki",
//         nim: "092101069",
//         email: "mayuki@mail.com",
//         jurusan: "Computer Science",
//         idDosenWali: 2,
//     },
//     {
//         nama: "Dracois",
//         nim: "062406107",
//         email: "dracois@mail.com",
//         jurusan: "Computer Science",
//         idDosenWali: 3,
//     },
// ];
// console.log("mulai");
// mhs.forEach((m) => {
//     for (let i = 0; i < 1000000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama);
// });
// console.log("selesai");

// Asyncrounous Callback

// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     };
//     xhr.open("get", url);
//     xhr.send();
// }
// console.log("Mulai");
// getDataMahasiswa(
//     "data/mahasiswa.json",
//     (results) => {
//         const mhs = JSON.parse(results);
//         mhs.forEach((m) => console.log(m.nama));
//     },
//     () => {}
// );
// console.log("Selesai");

// JQuery

console.log("Mulai");
$.ajax({
    url: "data/mahasiswa.json",
    success: (mhs) => {
        mhs.forEach((m) => console.log(m.nama));
        console.log(mhs);
    },
    error: (e) => {
        console.log(e.responseText);
    },
});

console.log("Selesai");
