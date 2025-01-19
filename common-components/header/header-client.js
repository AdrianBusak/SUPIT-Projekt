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
            console.log(document.querySelector('header').innerHTML);
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