// Scope

var musica = "rock";

if (musica) {
  var musica = "Grunge";
  console.log("dentro del if: ", musica);
}
console.log("Fuera del IF", musica);

// scope con let

const musica = "rock";

if (musica) {
  const musica = "Grunge";
  console.log("dentro del if: ", musica);
}
console.log("Fuera del IF", musica);
