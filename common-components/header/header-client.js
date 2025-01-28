
document.addEventListener('DOMContentLoaded', function () {
    fetch("/common-components/header/header.html")
        .then(response => response.text())
        .then(data => {
            if (!document.querySelector('header')) {
                const header = document.createElement('header');
                header.innerHTML = data;
                document.querySelector('body').prepend(header);
            } else {
                document.querySelector('header').innerHTML += data;
            }
        })
        .catch(() => console.log("Header failed to load"));
});

$(document).ready(function () {
    $.get('/common-components/contact/contact-modal.html')
        .done((data) => { // izvrsi nakon dohvacanja html a
            $('body').append(data);
        })
        .fail((error) => {
            console.error('Failed to load the contact modal:', error);
        });
});



const script = document.createElement('script');
script.src = '/common-components/header/header.js'; // Postavlja putanju do fajla
script.type = 'text/javascript';
script.defer = true; //Osigurava da se izvršava nakon parsiranja HTML-a
document.addEventListener('DOMContentLoaded', () => {
    document.body.append(script);
});

