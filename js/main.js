const containerNums = document.querySelector(".container-nums");
const numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

// Función para mezclar un array de forma aleatoria (algoritmo Fisher-Yates  ) 
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Mezclar el array de números
const numerosMezclados = shuffleArray(numeros);

const renderCells = () => {
  numerosMezclados.forEach((numero) => {
    const celda = document.createElement("div");
    celda.classList.add("num");
    celda.dataset.numero = numero; // Usar un atributo personalizado para el número
    celda.innerHTML = `?`;
    containerNums.appendChild(celda);
  });
};

renderCells();

let numeroDeCeldasMostradas = 0;
let primeraCeldaMostrada = null;

const celdas = document.querySelectorAll(".num");



celdas.forEach((celda) => {
  celda.addEventListener("click", (e) => {
    if (numeroDeCeldasMostradas < 2) {
      const id = parseInt(e.target.dataset.numero);
      celda.innerHTML = `${id}`;
      numeroDeCeldasMostradas++;

      if (numeroDeCeldasMostradas === 1) {
        primeraCeldaMostrada = celda;
      } else if (numeroDeCeldasMostradas === 2) {
        if (primeraCeldaMostrada.dataset.numero === celda.dataset.numero) {
          // Las dos celdas coinciden
          setTimeout(() => {
            primeraCeldaMostrada.style.visibility = "hidden";
            celda.style.visibility = "hidden";
          }, 1000);
        } else {
          // Las dos celdas no coinciden
          setTimeout(() => {
            primeraCeldaMostrada.innerHTML = "?";
            celda.innerHTML = "?";
          }, 1000);
        }
        numeroDeCeldasMostradas = 0;
      }
    }
  });
});
