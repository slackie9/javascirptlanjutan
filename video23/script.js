// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=203eb7d6&s=avengers",
//     success: (movies) => {
//         console.log(movies);
//     },
//     error: (e) => {
//         console.log(e.responseText);
//     },
// });

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// };

// xhr.open("get", "http://www.omdbapi.com/?apikey=203eb7d6&s=avengers");
// xhr.send();

// fetch("http://www.omdbapi.com/?apikey=203eb7d6&s=avengers")
//     .then((response) => response.json())
//     .then((response) => console.log(response));

//Promise

// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang

// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi(then /catch)

// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve("Janji telah di tepati");
//     } else {
//         reject("Ingkar Janji");
//     }
// });

// janji1.then((response) => console.log("OK : " + response)).catch((response) => console.log("NOT OK : " + response));

// contoh 2

// let ditepati = true;
// const janji2 = new Promise((resolve, rejected) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve("Ditepati setelah beberapa waktu");
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             resolve("Tidak di tepati setelah beberapa waktu");
//         }, 2000);
//     }
// });

// console.log("Mulai");
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log("selesai menunggu"))
//     .then((response) => console.log("OK : " + response))
//     .catch((response) => console.log("NOT OK : " + response));
// console.log("Selesai");

//Promise.all()

const film = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            {
                judul: "Avengers",
                sutradara: "Slackie",
                pemeran: "Mayuki, Kashiwagi",
            },
        ]);
    }, 1000);
});

const cuaca = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            {
                kota: "Bogor",
                temp: 26,
                kondisi: "Cerah Berawan",
            },
        ]);
    }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([film, cuaca])
    // .then((response) => console.log(response));
    .then((response) => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });
