function waitForCurriculums() {
    const linkCurr = document.querySelector('.curriculums');
    if (linkCurr) {
        if (checkIfIsLogged()) {
            enableCurriculums();
        } else {
            disableCurriculums();
        }
    } else {
        console.log("Čekam na učitavanje '.curriculums'...");
        setTimeout(waitForCurriculums, 100); // pokusaj dohvatiti svakih 100ms
    }
}

waitForCurriculums();

function enableCurriculums() {
    const linkCurr = document.querySelector('.curriculums');
    if (linkCurr && linkCurr.classList.contains('disabled')) {
        linkCurr.classList.remove('disabled');
    }
    

}

function disableCurriculums() {
    const linkCurr = document.querySelector('.curriculums');
    if (linkCurr && !linkCurr.classList.contains('disabled')) {
        linkCurr.classList.add('disabled');
    }
}

function checkIfIsLogged() {
    const token = sessionStorage.getItem('jwtToken');
    return token;
}
