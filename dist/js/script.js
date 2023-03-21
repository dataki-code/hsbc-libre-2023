// Obtener los botones y divs a mostrar
const btn1 = document.querySelector('#tab1');
const btn2 = document.querySelector('#tab2');
const div1 = document.querySelector('#tabContent1');
const div2 = document.querySelector('#tabContent2');

// Agregar eventos de clic a los botones
btn1.addEventListener('click', () => {
  // Mostrar div1 y ocultar div2
  div1.classList.remove('hidden');
  div2.classList.add('hidden');
  // Agregar clase "active" al botón
  btn1.classList.add('active');
  btn2.classList.remove('active');
});

btn2.addEventListener('click', () => {
  // Mostrar div2 y ocultar div1
  div2.classList.remove('hidden');
  div1.classList.add('hidden');
  // Agregar clase "active" al botón
  btn2.classList.add('active');
  btn1.classList.remove('active');
});