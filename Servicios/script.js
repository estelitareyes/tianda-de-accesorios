const estrellas = document.querySelectorAll('.estrella');
  const calificacionInput = document.getElementById('calificacion');

  estrellas.forEach(estrella => {
      estrella.addEventListener('click', () => {
          const valor = estrella.dataset.value;

    
          calificacionInput.value = valor;

          
          estrellas.forEach(star => {
              star.classList.remove('selected');
          });
          for (let i = 0; i < valor; i++) {
              estrellas[i].classList.add('selected');
          }
      });
  });

  const formCalificacion = document.getElementById('form-calificacion');
  formCalificacion.addEventListener('submit', (e) => {
      e.preventDefault(); 
      const opinion = document.getElementById('opinion').value;

  
      const listaTestimonios = document.getElementById('lista-testimonios');
      const nuevoTestimonio = document.createElement('div');
      nuevoTestimonio.classList.add('testimonio');
      nuevoTestimonio.innerHTML = `
          <h4>Calificación: ${calificacionInput.value} estrellas</h4>
          <p>${opinion}</p>
      `;
      listaTestimonios.appendChild(nuevoTestimonio);

    
      formCalificacion.reset();
      calificacionInput.value = '';
      estrellas.forEach(star => {
          star.classList.remove('selected');
      });
  });
 
function mostrar(servicio) {
  const servicios = document.querySelectorAll('.servicio');
  servicios.forEach(s => {
      s.style.display = 'none'; 
  });
  document.getElementById(servicio).style.display = 'block'; 
}
