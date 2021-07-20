// html fragment

// const mhs = {
//     nama: "Slackie",
//     umur: 33,
//     nim: "062406104",
//     email: "slackie@mail.com",
// };

// const el = `<div class="mhs">
//         <h2>${mhs.nama} </h2>
//         <span class="nim">${mhs.nim}</span>

//     </div>`;

// 2. looping

// const mhs = [
//     {
//         nama: "Slackie",
//         email: "slackie@mail",
//     },
//     {
//         nama: "Mayuki",
//         email: "mayuki@mail",
//     },
//     {
//         nama: "Kashiwagi",
//         email: "kashiwagi@mail",
//     },
// ];

// const el = `<div class="mhs">
//     ${mhs
//         .map(
//             (m) => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`
//         )
//         .join("")}
// </div>`;

// conditional
// ternaru

// const lagu = {
//     judul: "March Turkish",
//     penyanyi: "Mozart",
//     feat: "Salieri",
// };

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.judul}</li>
//         <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
//     </ul>
// </div>`;

// 4. nested

const mhs = {
    nama: "Slackie",
    semester: 5,
    mataKuliah: ["Rekayasa Web", "Analisis dan Perancangan Sistem Informasi", "Pemograman Sistem Interaktif", "Perancangan Sistem Berorientasi Object"],
};

function cetakMatakuliah(mataKuliah) {
    return `
    <ol>
        
        ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>
    
    `;
}
const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">${mhs.semester}</span>
    <h4>Mata Kuliah</h4>
    ${cetakMatakuliah(mhs.mataKuliah)}
    
</div>`;
document.body.innerHTML = el;
