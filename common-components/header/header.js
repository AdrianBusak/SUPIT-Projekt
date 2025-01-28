function waitForCurriculums() {
    const linkCurr = document.querySelector('.curriculums');
    if (linkCurr) {
        if (checkIfIsLogged()) {
            enableCurriculums();
        } else {
            disableCurriculums();
        }
    } else {
        setTimeout(waitForCurriculums, 100); // pokusaj dohvatiti svakih 100ms
    }
}

waitForCurriculums();

function enableCurriculums() {
    const linkCurr = document.querySelector('.curriculums');
    if (linkCurr && linkCurr.classList.contains('disabled')) {
        linkCurr.classList.remove('disabled');
        changeButtonLogIn();
    }
    

}

function disableCurriculums() {
    const linkCurr = document.querySelector('.curriculums');
    if (linkCurr && !linkCurr.classList.contains('disabled')) {
        linkCurr.classList.add('disabled');
        changeButtonLogIn();
    }
}

function checkIfIsLogged() {
    const token = sessionStorage.getItem('jwtToken');
    return token;
}


function changeButtonLogIn(){
    var logInButton = document.querySelector('.log-in');
    const username = sessionStorage.getItem('username');
    logInButton.querySelector('p').innerText = `Odjavi se | ${username}`;
    logInButton.href = "/pages/home/components/dashboard-home.html";
    if(checkIfIsLogged()){
        logInButton.addEventListener("click", () => {
            sessionStorage.removeItem('jwtToken');
        });
    }
}
