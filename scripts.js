document.addEventListener('DOMContentLoaded', function() {
    const inputTarea = document.getElementById('input-tarea');
    const h4 = document.getElementById('h4_a');
    const listaTarea = document.getElementById('lista-tareas');
    const addTarea = document.getElementById('add-tarea');
    const deleteTarea = document.getElementById('delete-tarea');
  
    addTarea.addEventListener('click', function() {
      if (inputTarea.value.trim() === '') {
        h4.style.display = 'block';  
      } else {
        h4.style.display = 'none';

        const nuevoElemento = document.createElement('li');
        nuevoElemento.innerHTML = `<input type="checkbox" /> <span> ${inputTarea.value}</span>`;
        listaTarea.appendChild(nuevoElemento);
        
const checkbox = nuevoElemento.querySelector('input[type="checkbox"]');
checkbox.addEventListener('change', function() {
    const taskTest = nuevoElemento.querySelector('span');
    taskTest.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    deleteTarea.addEventListener('click', function() {
        nuevoElemento.remove(nuevoElemento);
    }); 
}
);
        inputTarea.value = '';
      }
    });
  
    inputTarea.addEventListener('input', function() {
      if (inputTarea.value.trim() !== '') {
        h4.style.display = 'none';
      }
    });


  });

