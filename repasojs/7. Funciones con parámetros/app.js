// parámetros por default en las funciones

const actividad = function (
  nombre = "Walter White",
  actividad = "Enseñar Química"
) {
  console.log(
    `la persona ${nombre}, esta realizando la actividad ${actividad}`
  );
};

actividad("Juan", "Aprender JavaScript");
actividad("Pedro", "Creando un sitio web");
actividad("Antonio");
