let questions = document.querySelectorAll('.preguntas__container');
questions.forEach((item, index) => {
    let parrafo = item.children[0].children[1];
    let img = item.children[1];
    item.addEventListener('click', () => {
        parrafo.classList.toggle('activeP')
        img.classList.toggle('activeImg')
    })
})
