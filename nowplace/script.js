
const STORAGE_KEY = "nowplace_nows";

function getNows() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveNows(nows) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nows));
}

function hasRecentNow() {
  const limite = Date.now() - 24 * 60 * 60 * 1000;

  return getNows().some(now => {
    const data = new Date(now.createdAt).getTime();
    return Number.isFinite(data) && data >= limite;
  });
}

function liberarFeed() {
  const feed = document.querySelector("#feed");
  const bloqueio = document.querySelector("#feed-gate");

  if (!feed || !bloqueio) return;

  const liberado = hasRecentNow();

  feed.hidden = !liberado;
  bloqueio.hidden = liberado;
}

function buscarNows() {
  if (!hasRecentNow()) {
    liberarFeed();
    alert("Registre um Now nas últimas 24 horas para liberar o feed.");
    return;
  }

  liberarFeed();

  const evento = new CustomEvent("nowplace:buscar-nows");
  document.dispatchEvent(evento);
}

document.addEventListener("DOMContentLoaded", () => {
  const botao = document.querySelector("#buscar-nows");

  if (botao) {
    botao.addEventListener("click", buscarNows);
  }

  liberarFeed();
});
