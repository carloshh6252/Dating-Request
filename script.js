function createSunflower() {
  const sunflower = document.createElement("img");
  sunflower.src = "img/girassol.png";
  sunflower.classList.add("falling-sunflower");
  sunflower.style.left = Math.random() * 100 + "vw";
  sunflower.style.animationDuration = 4 + Math.random() * 3 + "s";
  document.body.appendChild(sunflower);
  setTimeout(() => sunflower.remove(), 7000);
}

setInterval(createSunflower, 1500);

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("falling-heart");
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 10 + 20) + "px";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 1500);

    const contadorEl = document.getElementById("contador-amor");
    const dataInicio = new Date("2025-05-02T00:00:00");

    function atualizarContador() {
      const agora = new Date();
      let diff = agora - dataInicio;

      const segundos = Math.floor(diff / 1000);
      const minutos = Math.floor(segundos / 60);
      const horas = Math.floor(minutos / 60);
      const dias = Math.floor(horas / 24);

      const anos = Math.floor(dias / 365);
      const meses = Math.floor((dias % 365) / 30);
      const diasRestantes = (dias % 365) % 30;

      const horasRestantes = horas % 24;
      const minutosRestantes = minutos % 60;
      const segundosRestantes = segundos % 60;

      contadorEl.innerText = `Estamos juntos há: ${anos} ano(s), ${meses} mês(es), ${diasRestantes} dia(s), ${horasRestantes} hora(s), ${minutosRestantes} minuto(s) e ${segundosRestantes} segundo(s) 💖`;
    }

    setInterval(atualizarContador, 1000);
    atualizarContador();