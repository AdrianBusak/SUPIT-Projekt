const url = "https://www.fulek.com/data/api/user/register";

//dohvat podataka
const form = $("form");
const username = $("#username");
const password = $("#password");

form.on("submit", (event) => {
	// isto kao addEventListener
	event.preventDefault();

	const userData = {
		username: username.val(),
		password: password.val(),
	};
  
	$.ajax({
		url: url,
		method: "POST",
		contentType: "application/json", //podaci se salju u json formatu
		data: JSON.stringify(userData),
		success(response) {
			if (response.isSuccess) {
				location.replace(
					"/pages/auth/logIn/components/logIn-dashboard.html"
				);
				console.log("Uspjesna prijava.");
			} else {
				alert("Pogreška kod registracije.");
			}
		},
		error() {
			alert("Greška sa serverom.");
		},
	});
});
