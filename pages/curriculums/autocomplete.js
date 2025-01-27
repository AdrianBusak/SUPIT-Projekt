async function getAllCurriculums() {
  const token = sessionStorage.getItem("jwtToken"); // Dohvati token iz localStorage
  if (!token) {
    console.error("Korisnik nije prijavljen.");
    return;
  }

  const url = "https://www.fulek.com/data/api/supit/curriculum-list/hr";
  try {
    const data = await new Promise((resolve, reject) => {
      $.ajax({
        url: url,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the header
        },
        success: function (data) {
          console.log("Svi kolegiji:", data.data);
          resolve(data.data);
        },
        error: function (xhr, status, error) {
          console.error("Greška prilikom dohvaćanja kolegija:", error);
          reject(error);
        },
      });
    });
    return data;
  } catch (error) {
    console.error("Greška:", error);
    throw error;
  }
}


let curriculumsNames = [];

(async () => {
  try {
    const curriculums = await getAllCurriculums();
    console.log("Dohvaćeni kolegiji:", curriculums);
    curriculums.forEach(element => {
      curriculumsNames.push(element.kolegij);
    });
  } catch (error) {
    console.error("Nije moguće dohvatiti kolegije:", error);
  }
})();

console.log(curriculumsNames);

$( function() {
  $( "#tags" ).autocomplete({
    source: curriculumsNames
  });
} );
