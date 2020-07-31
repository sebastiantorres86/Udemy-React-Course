// Template Strings

const nombre = "Juan";
const trabajo = "Desarrollador Web";

// concatenar JavaScript
console.log("Nombre: " + nombre + ", Trabajo: " + trabajo);
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

// concatenar con múltiples líneas
const contenedorApp = document.querySelector("#app");
let html =
  "<ul>" +
  "<li> Nombre: " +
  nombre +
  "</li>" +
  "<li> Trabajo: " +
  trabajo +
  "</li>" +
  "</ul>";

let html = `
            <ul>
              <li>Nombre: ${nombre} </li>
              <li>Trabajo: ${trabajo} </li>
            </ul>
`;

contenedorApp.innerHTML = html;
