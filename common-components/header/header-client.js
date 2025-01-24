
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
    $.get('/common-components/contact/contact-modal.html', (data) => {
        $('body').append(data);
    });
});