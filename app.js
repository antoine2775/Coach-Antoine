const exercices = [
  "Échauffement",
  "Assis-debout sur chaise",
  "Développé épaules avec haltères",
  "Curl biceps",
  "Rotation du buste",
  "Marche sur place",
  "Étirements"
];

let numero = 0;
let temps = 40;
let intervalle;

function demarrer() {

  numero = 0;
  lancerExercice();

}

function lancerExercice() {

  if (numero >= exercices.length) {

    document.getElementById("exercice").innerHTML =
    "🎉 Bravo Antoine ! Séance terminée";

    document.getElementById("timer").innerHTML =
    "";

    return;
  }

  document.getElementById("exercice").innerHTML =
  exercices[numero];

  temps = 40;

  intervalle = setInterval(function(){

    document.getElementById("timer").innerHTML =
    temps + " secondes";

    temps--;

    if (temps < 0) {

      clearInterval(intervalle);

      numero++;

      lancerExercice();

    }

  },1000);

}
