class Tamagotchi {

  constructor(nombre) {
    this.nombre = nombre;
    this.salud = this.random();
    this.felicidad = this.random();
    this.limpieza = this.random();
    this.energia = this.random();
  }

  random = () => Math.floor(Math.random() * 8) + 3;

  limitar = (v) => v > 10 ? 10 : v < 0 ? 0 : v;

  mostrar = () => {
    document.getElementById("saludText").innerText = this.salud;
    document.getElementById("felicidadText").innerText = this.felicidad;
    document.getElementById("limpiezaText").innerText = this.limpieza;
    document.getElementById("energiaText").innerText = this.energia;

    document.getElementById("saludBar").style.width = `${this.salud * 10}%`;
    document.getElementById("felicidadBar").style.width = `${this.felicidad * 10}%`;
    document.getElementById("limpiezaBar").style.width = `${this.limpieza * 10}%`;
    document.getElementById("energiaBar").style.width = `${this.energia * 10}%`;

    this.verificarEstado();
  }

  alimentar = () => {
    this.energia = this.limitar(this.energia + 3);
    this.felicidad = this.limitar(this.felicidad + 2);
    this.limpieza = this.limitar(this.limpieza - 1);
    this.mostrar();
  }

  jugar = () => {
    this.felicidad = this.limitar(this.felicidad + 2);
    this.energia = this.limitar(this.energia - 2);
    this.limpieza = this.limitar(this.limpieza - 2);
    this.mostrar();
  }

  dormir = () => {
    this.energia = this.limitar(this.energia + 5);
    this.salud = this.limitar(this.salud + 2);
    this.mostrar();
  }

  duchar = () => {
    this.salud = this.limitar(this.salud + 3);
    this.limpieza = 10;
    this.mostrar();
  }

  reprender = () => {
    this.felicidad = this.limitar(this.felicidad - 3);
    this.mostrar();
  }

  acariciar = () => {
    this.felicidad = this.limitar(this.felicidad + 4);
    this.mostrar();
  }

  disminuir = () => {
    this.salud = this.limitar(this.salud - 1);
    this.felicidad = this.limitar(this.felicidad - 1);
    this.limpieza = this.limitar(this.limpieza - 1);
    this.energia = this.limitar(this.energia - 1);
    this.mostrar();
  }

  verificarEstado = () => {
  const message = document.getElementById("message");

  if (
    this.salud === 0 ||
    this.felicidad === 0 ||
    this.limpieza === 0 ||
    this.energia === 0
  ) {
    message.innerText = "💀 El Tamagotchi ha muerto...";

    clearInterval(intervalo);
    desactivarBotones();

    setTimeout(() => {
      document.getElementById("gameOverScreen").classList.remove("hidden");
    }, 2000);

    return;
  }

  message.innerText = "🐣 Tamagotchi Vivo";
};
}

const tamagotchi = new Tamagotchi("Neo");
tamagotchi.mostrar();

document.getElementById("alimentar").addEventListener("click", tamagotchi.alimentar);
document.getElementById("jugar").addEventListener("click", tamagotchi.jugar);
document.getElementById("dormir").addEventListener("click", tamagotchi.dormir);
document.getElementById("duchar").addEventListener("click", tamagotchi.duchar);
document.getElementById("reprender").addEventListener("click", tamagotchi.reprender);
document.getElementById("acariciar").addEventListener("click", tamagotchi.acariciar);

function desactivarBotones() {
  const botones = document.querySelectorAll("button");

  botones.forEach(boton => {
    if (boton.id !== "restartBtn") {
      boton.disabled = true;
      boton.classList.add("opacity-40", "cursor-not-allowed");
    }
  });
}

const intervalo = setInterval(() => {
  tamagotchi.disminuir();
}, 5000);