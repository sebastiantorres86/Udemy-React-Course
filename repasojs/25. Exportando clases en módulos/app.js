// crear variables

// variables con var
// var aprendiendo = 'JavaScript'

// aprendiendo= true

// variables con const
// const aprendiendo = "JavaScript";
// aprendiendo = true;

// console.log(aprendiendo);

// let

// let aprendiendo = "JavaScript";

// aprendiendo = true;

// console.log(aprendiendo);

// Scope

// var musica = "rock";

// if (musica) {
//   var musica = "Grunge";
//   console.log("dentro del if: ", musica);
// }
// console.log("Fuera del IF", musica);

// scope con let

// const musica = "rock";

// if (musica) {
//   const
//    musica = "Grunge";
//   console.log("dentro del if: ", musica);
// }
// console.log("Fuera del IF", musica);

// Template Strings

// const nombre = "Juan";
// const trabajo = "Desarrollador Web";

// // concatenar JavaScript
// console.log("Nombre: " + nombre + ", Trabajo: " + trabajo);
// console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

// // concatenar con múltiples líneas
// const contenedorApp = document.querySelector("#app");
// // let html =
// //   "<ul>" +
// //   "<li> Nombre: " +
// //   nombre +
// //   "</li>" +
// //   "<li> Trabajo: " +
// //   trabajo +
// //   "</li>" +
// //   "</ul>";

// let html = `
//             <ul>
//               <li>Nombre: ${nombre} </li>
//               <li>Trabajo: ${trabajo} </li>
//             </ul>
// `;

// contenedorApp.innerHTML = html;

// creando una función

// // Function Declaration
// function saludar(nombre) {
//   console.log("Bienvenido " + nombre);
// }
// saludar();

// // Function expression

// const cliente = function (nombreCliente) {
//   console.log("Mostrando datos del cliente: " + nombreCliente);
// };

// cliente("Juan");

// // parámetros por default en las funciones

// const actividad = function (
//   nombre = "Walter White",
//   actividad = "Enseñar Química"
// ) {
//   console.log(
//     `la persona ${nombre}, esta realizando la actividad ${actividad}`
//   );
// };

// actividad("Juan", "Aprender JavaScript");
// actividad("Pedro", "Creando un sitio web");
// actividad("Antonio");

// // arrow functions

// let viajando = (destino) => `Viajando a la ciudad de: ${destino}`;

// let viaje;

// viaje = viajando("Paris");
// viaje = viajando("Londres");

// console.log(viaje);

// Objetos

// // Object Literal
// const persona = {
//   nombre: "Juan",
//   profesion: "Desarrollador web",
//   edad: 500,
// };

// // console.log(persona);
// // const mostrarCliente = mostrarInformacionTarea(
// //   persona.nombre,
// //   persona.profesion
// // );
// // console.log(mostrarCliente)

// // Object Constructor
// function Tarea(nombre, urgencia) {
//   (this.nombre = nombre), (this.urgencia = urgencia);
// }
// // Agregar un protoype a tarea:
// Tarea.prototype.mostrarInformacionTarea = function () {
//   return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
// };

// // crear una nueva tarea:
// const tarea1 = new Tarea("Aprender JavaScript y React", "Urgente");
// const tarea2 = new Tarea("Pasear al perro", "Media");

// console.log(tarea1);
// console.log(tarea1.mostrarInformacionTarea());
// console.log(tarea1);
// console.log(tarea2.mostrarInformacionTarea());

// // Destructuring de objetos
// const aprendiendoJS = {
//   version: {
//     nueva: "ES6",
//     anterior: "ES5",
//   },
//   frameworks: ["React", "VueJS", "AngularJS"],
// };

// // Destructuring es extraer los valores de un objeto

// // console.log(aprendiendoJS);

// // version anterior
// // let version = aprendiendoJS.version.nueva;
// // let framework = aprendiendoJS.frameworks[1];

// // Destructuring forma nueva
// let {anterior} = aprendiendoJS.version
// console.log(anterior)

// // Object Literal enhancement

// const banda = "Metallica";
// const genero = "Heavy Metal";
// const canciones = ["Master Of Puppets", "Seek & Destroy", "Enter Sandman"];

// // Forma anterior
// // const metallica = {
// //   banda: banda,
// //   genero: genero,
// //   canciones: canciones,
// // };

// // Forma nueva
// const metallica = {banda, genero, canciones}

// console.log(metallica);

// // métodos o funciones en un objeto

// const persona = {
//   nombre: "Juan",
//   trabajo: "Desarrollador web",
//   edad: 500,
//   musicaRock: true,
//   mostrarInformacion() {
//     console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
//   },
// };

// persona.mostrarInformacion();

// // Arreglos y .map

// carrito = ["Producto 1", "Producto 2", "Producto 3"];

// carrito.map((producto) => {
//   return "El producto es " + producto;
// });

// const persona = {
//   nombre: 'Juan',
//   profesion: 'Desarrollador web',
//   edad: 500
// }

// console.log(Object.keys(persona))

// // Spread operator ...

// function suma(a, b, c) {
//   console.log(a+b+c)
// }

// const numeros = [1, 2, 3]

// suma(...numeros)

// // Métodos en arreglos

// const personas = [
//   {nombre: 'juan', edad: 23, aprendiendo: 'JavaScript'},
//   {nombre: 'Pablo', edad: 18, aprendiendo: 'PHP'},
//   {nombre: 'Alejandra', edad: 21, aprendiendo: 'AdobeXD'},
//   {nombre: 'Karen', edad: 30, aprendiendo: 'Python'},
//   {nombre: 'Miguel', edad: 35, aprendiendo: 'ReactJS'},
// ]

// // console.log(personas)

// // mayores de 28 años
// const mayores = personas.filter(persona => {
//   return persona.edad > 28
// })
// console.log(mayores)

// // que aprende Alejandra yh su edad
// const alejandra = personas.find(persona => {
//   return persona.nombre === 'Alejandra'
// })

// // console.log('Alejandra esta aprendiendo: ' + alejandra.aprendiendo)

// let total = personas.reduce((edadTotal, persona)  => {
//   return edadTotal + persona.edad
// }, 0)

// console.log(total / personas.length)

// // Promises

// const aplicarDescuento = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let descuento = false;

//     if (descuento) {
//       resolve("Descuento aplicado!");
//     } else {
//       reject("No se pudo aplicar el descuento");
//     }
//   }, 3000);
// });

// aplicarDescuento.then((resultado) => {
//   console.log(resultado);
// }).catch(error => {
//   console.log(error)
// });

// const descargarUsuarios = (cantidad) =>
//   new Promise((resolve, reject) => {
//     // pasar la cantidad a la api

//     const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

//     // llamado a ajax
//     const xhr = new XMLHttpRequest();

//     // abrir la conexión
//     xhr.open("GET", api, true);

//     // on load
//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         resolve(JSON.parse(xhr.responseText).results);
//       } else {
//         reject(Error(xhr.statusText));
//       }
//     };

//     // opcional (on error)
//     xhr.onerror = (error) => reject(error);

//     // send
//     xhr.send();
//   });

// descargarUsuarios(30).then(
//   (miembros) => imprimirHTML(miembros),
//   (error) => console.error(new Error("Hubo un error" + error))
// );

// function imprimirHTML(usuarios) {
//   let html = "";
//   usuarios.forEach((usuario) => {
//     html += `
//             <li>
//               Nombre: ${usuario.name.first} ${usuario.name.last}
//               País: ${usuario.nat}
//               Imagen:
//                 <img src="${usuario.picture.medium}">
//             </li>
//     `;
//   });

//   const contenedorApp = document.querySelector('#app')
//   contenedorApp.innerHTML = html
// }

// Módulos

import Tarea from "./tareas.js";

const tarea1 = new Tarea('Aprender JavaScript', 'Urgente')
console.log(tarea1)

tarea1.mostrar()