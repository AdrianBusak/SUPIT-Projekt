document.addEventListener("DOMContentLoaded", function () {
    let typedElement = document.querySelector('.typeWriter-text');

    let typewriter = new Typewriter(typedElement, {
        loop: false
    });

    typewriter
        .pauseFor(500)
        .typeString('<span class="text">Budi izvrstan u onom što vidiš!</span>')
        .pauseFor(300)
        .deleteChars(6)
        .typeString('<span class="text">voliš.</span>')
        .pauseFor(300)
        .typeString('</br><span class="text" style="color:rgb(184, 0, 0);">ZAISKRI.</span>')
        .start();
});
