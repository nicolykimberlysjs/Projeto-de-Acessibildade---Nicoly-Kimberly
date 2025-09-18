const root = document.documentElement;
let escala = 1;

document.getElementById('aumentar').addEventListener('click', () => {
  escala = Math.min(1.5, escala + 0.1);
  root.style.setProperty('--scale', escala);
});

document.getElementById('diminuir').addEventListener('click', () => {
  escala = Math.max(0.8, escala - 0.1);
  root.style.setProperty('--scale', escala);
});

document.getElementById('contraste').addEventListener('click', () => {
  document.body.classList.toggle('alto-contraste');
});

document.getElementById('topo').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
