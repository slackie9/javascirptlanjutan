// spread operators
// memecah iterable menjadi single element

// console.log(...mhs[0]);

// menggabungkan 2 array
// const mhs = ["Slackie", "Mayuki", "Kashiwagi"];
// const dosen = ["Dracois", "Megalomen", "Sephirot"];

// const orang = [...mhs, "Milky", ...dosen];
// // const orang = mhs.concat(dosen);

// console.log(orang);

// mengcopy array

// const mhs = ["Slackie", "Mayuki", "Kashiwagi"];
// // const mhs1 = mhs;
// // mhs1[0] = "Watanabe";

// const mhs1 = [...mhs];
// mhs1[0] = "Watanabe";

// console.log(mhs);
// console.log(mhs1);

// const liMhs = document.querySelectorAll("li");

// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// const mhs = [...liMhs].map((m) => m.textContent);

// console.log(mhs);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
