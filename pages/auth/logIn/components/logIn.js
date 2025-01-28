const form = $('form');
const username = $('#username');
const password = $('#password');

const url = 'https://www.fulek.com/data/api/user/login';

form.on('submit', function (event) {
  event.preventDefault();

  const userData = {
    username: username.val(),
    password: password.val()
  };

  $.ajax({
    url: url,
    method: 'POST',
    contentType: 'application/json', // tip podataka koji se salje na server
    data: JSON.stringify(userData),
    dataType: 'json', //odgovor od servera
    success: function (response) {
      if (response.isSuccess) {
        // Ako je prijava uspješna
        sessionStorage.setItem('username', userData.username);
        sessionStorage.setItem('jwtToken', response.data.token);
        setTimeout(() => { // jos dodat trebam 1,2,3 div
            location.replace('/pages/home/components/dashboard-home.html');
        }, 3000);
      } else {
        alert('Pogrešno upisano korisničko ime ili lozinka.');
      }
    },
    error: function (xhr, status, error) {
      // Ako dođe do greške tijekom zahtjeva
      console.error('Greška:', error);
      alert('Došlo je do greške prilikom povezivanja sa serverom.');
    }
  });
});
