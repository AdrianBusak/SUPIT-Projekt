// import { addModule } from "../header/modal-contact.js";

$(document).ready(function() {
    console.log('HTML je učitan i spreman!');
});
 
if($(document).ready()){
    fetch("/common-components/header/header.html")
        .then((response) => {
            return response.text();
        })
        .then((data) => 
        {
            document.querySelector('header').innerHTML += data;
            const toggler = document.querySelector('.navbar-toggler');
            const navbarNav = document.querySelector('#navbarNav');

            if (toggler && navbarNav) {
                toggler.addEventListener('click', function () {
                    navbarNav.classList.toggle('show');
                });
        }
        })
        .catch(()=> console.log("header faild to load"));
}

if($(document).ready(function(){
    $.get('/common-components/contact/contact-modal.html', (data) => {
        console.log(data);
        $('body').append(data);
    });
}));