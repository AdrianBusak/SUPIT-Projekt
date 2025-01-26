const url = 'https://www.fulek.com/data/api/user/register';

function register(data){
  $.ajax({
    url: url,
    method: 'POST', 
    contentType: 'application/json', //podaci se salju u json formatu
    data: JSON.stringify(data),
    success(response){
      if(response.isSuccess) {
        location.replace('/pages/auth/logIn/components/logIn-dashboard.html');
        console.log("Uspjesna prijava.");
      }
      else{
        alert('Pogreška kod registracije.');
      }
    },
    error() {
      alert('Greška sa serverom.');
    }
  })
}
//dohvat podataka
const form = $('form');
const username = $('#username');
const password = $('#password');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const userData = {
    username: username.val(),
    password: password.val()
  }
  register(userData);
});


