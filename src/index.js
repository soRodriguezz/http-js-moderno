// import { init } from "./js/chistes-page";
// import { init } from "./js/usuarios-page";
// import { obtenerUsuarios } from "./js/http-provider";

import { init } from "./js/archivos-page";

// obtenerUsuarios().then(console.log);

// init();

init();

/* --------------------------- CRUD para usuarios --------------------------- */

// import * as CRUD from "./js/crud-provider";

// CRUD.getUsuario(1).then(console.log);
// CRUD.crearUsuario({
//   name: "Sebastian",
//   job: "Carpintero",
// }).then(console.log);

// CRUD.actualizarUsuario(1, {
//     name: 'Mont',
//     job: 'Develpoer'
// }).then(console.log);

// CRUD.borrarUsuario(1).then(console.log);

/* ------------------------------ EJEMPLO FETCH ----------------------------- */

// const jokeUrl = "https://api.chucknorris.io/jokes/random";

// import { obtenerChiste } from "./js/http-provider";

// fetch( jokeUrl ).then(respo => {
//     resp.json().then( ({ id, value }) => {
//         console.log(id);
//         console.log(value);
//     });
// });

// fetch(jokeUrl)
//   .then((resp) => resp.json())
//   .then(({ id, value }) => {
//     console.log(id, value);
//   });

// obtenerChiste().then(console.log);
