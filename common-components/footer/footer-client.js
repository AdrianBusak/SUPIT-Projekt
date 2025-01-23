document.addEventListener('DOMContentLoaded', function () {
    fetch("/common-components/footer/footer.html")
        .then(response => response.text())
        .then(data => {
                const footer = document.createElement('footer');
                footer.innerHTML = data;
                document.querySelector('body').append(footer);
        })
        .catch(() => console.log("Footer failed to load"));
});