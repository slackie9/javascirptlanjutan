// Tagged Templates

// const nama = "Slackie";
// const umur = 32;

// function coba(strings, ...values) {
//     // let result = "";
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ""}`;
//     // });
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ""}`, "");
// }

// const str = coba`Hallo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// highlight

const nama = "Slackie";
const umur = 32;
const email = "slackie@mail.com";

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ""}</span>`, "");
}

const str = highlight`Hallo, nama saya ${nama}, saya ${umur} tahun dan email saya ${email}.`;
// console.log(str);

document.body.innerHTML = str;
