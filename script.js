const accordionHeaders = document.querySelectorAll('.accordionHeader');

accordionHeaders.forEach(accordionHeader => {
    accordionHeader.addEventListener('click', () => {
        accordionHeader.classList.toggle("is-open")});
    });