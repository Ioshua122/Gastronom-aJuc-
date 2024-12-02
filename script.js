// Menú hamburguesa
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Botón "Comenzar"
const comenzarBtn = document.getElementById('comenzarBtn');
comenzarBtn.addEventListener('click', () => {
    const informacionSection = document.getElementById('informacion');
    informacionSection.scrollIntoView({ behavior: 'smooth' });
});

// Comentarios
const commentForm = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const commentBox = document.getElementById('commentBox');
    const newComment = document.createElement('p');
    newComment.textContent = commentBox.value;
    commentsList.appendChild(newComment);
    commentBox.value = '';
});
