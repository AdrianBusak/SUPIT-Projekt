async function getAllCurriculums() {
  const token = sessionStorage.getItem("jwtToken");
  if (!token) {
    console.error("Korisnik nije prijavljen.");
    return;
  }

  const url = "https://www.fulek.com/data/api/supit/curriculum-list/hr";
  try {
    const data = await new Promise((resolve, reject) => {// stvaramo promise u koji cemo spremit podatke koje dobijemo sa servera
      $.ajax({
        url: url,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        success: function (data) {
          resolve(data.data); // sto vraca promise
        },
        error: function (xhr, status, error) { //XMLHttpRequest Object
          console.error("Greška prilikom dohvaćanja kolegija:", error);
          reject(error); // ako se dogodi greska da se odbije promise
        },
      });
    });
    return data;
  } catch (error) {
    console.error("Greška:", error);
    throw error;
  }
}

let curriculums = [];
let curriculumsNames = [];

(async () => { 
  try {
    const curriculumsTemp = await getAllCurriculums();
    curriculumsTemp.forEach(element => {
      curriculums.push(element);
      curriculumsNames.push(element.kolegij);
    });
  } catch (error) {
    console.error("Nije moguće dohvatiti kolegije:", error);
  }
})(); //() - pozovi odma


$( function() {
  $( "#tags" ).autocomplete({
    source: curriculumsNames
  });
} );

// Promise je objekt koji predstavlja rezultat asinhrone operacije
//  koja se još nije dovršila. Kada ta operacija završi, Promise se može "razriješiti" (resolve) s rezultatom ili "odbiti" (reject) ako je došlo do greške.


//Dodavanje u tablicu
let tableCurriculums = new Array;

// Slušaj događaj na input polju
document.querySelector("#tags").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    showTable();
    addItem(curriculums);
    calculateMath();
  }
});

function showTable(){
  const table = document.querySelector('.container-table-visibility');
  if(table){
    table.classList.remove('container-table-visibility');
  }
}

// Funkcija za dohvaćanje unesenih podataka
function takeData() {
  const curriculumName = document.querySelector("#tags").value;
  return curriculumName;
}

// Dodavanje kolegija u listu i prikaz u tablici
function addItem(curriculums) {
  const curriculumName = takeData();

  if (!curriculumName) {//zastita za krivi unos
    alert("Unesite kolegij.");
    return;
  }

  // Pronađi podatke o kolegiju
  const curriculumData = curriculums.find(
    (c) => c.kolegij === curriculumName
  );

  if (!curriculumData) {
    alert("Nepostojeći kolegij!");
    return;
  }

  tableCurriculums.push(curriculumData);
  displayItems(tableCurriculums);

  // Resetiraj input polje
  document.querySelector("#tags").value = "";
}

// Kreiranje reda tablice za kolegij
function CreateHtmlItem(item) {
  return `
    <tr>
        <td class="text-truncate">${item.kolegij}</td>
        <td>${item.ects}</td>
        <td>${item.sati}</td>
        <td>${item.predavanja}</td>
        <td>${item.vjezbe}</td>
        <td>${item.tip}</td>
        <td>
          <button class="btn btn-danger btn-sm js-delete-button">Obriši</button>
        </td>
    </tr>
  `;
}

// Prikaz kolegija u tablici
function displayItems(toDoItems) {
  const tbody = document.querySelector("tbody");
  let html = "";

  toDoItems.forEach((item) => {
    html += CreateHtmlItem(item);
  });

  tbody.innerHTML = html;

  // Dodaj event listener za brisanje
  DeleteItem();
}

// Brisanje kolegija iz tablice
function DeleteItem() {
  document.querySelectorAll(".js-delete-button").forEach((element, index) => {
    element.addEventListener("click", () => {
      tableCurriculums.splice(index, 1);
      displayItems(tableCurriculums);
      calculateMath();
    });
  })
}


// Matematika
function calculateMath(){
  var results = {
    ects: 0,
    hours: 0,
    lectures: 0,
    labs: 0
  };

  tableCurriculums.forEach(curriculum => {
    results.ects += parseInt(curriculum.ects);
    results.hours += parseInt(curriculum.sati);
    results.lectures += parseInt(curriculum.predavanja);
    results.labs += parseInt(curriculum.vjezbe);
  });

  displayResults(results);
}

function displayResults(results){
  const html = CreateHtmlMath(results);
  const tFoot = document.querySelector('tfoot');
  tFoot.innerHTML = html;
}

function CreateHtmlMath(results) {
  return `
    <tr>
      <th scope="row">Ukupno:</th>
      <td id="ukupno-ects" class="fw-bold text-danger">${results.ects}</td>
      <td id="ukupno-sati" class="fw-bold text-danger">${results.hours}</td>
      <td id="p">${results.lectures}</td>
      <td id="v">${results.labs}</td>
      <td></td>
      <td></td>
    </tr>
  `;
}