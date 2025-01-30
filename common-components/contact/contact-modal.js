// $(document).ready(() => {
//   $("#form-modal").on("click", (event) => {
//     event.preventDefault();

//     const form = $('#form-modal');

//     const notification = $('#ReceiveNewsletter').prop('checked') ? "true" : "false";
//     console.log(notification);

//     let formData = form.serializeArray();
//     formData.pop();
//     formData.push({ name: "ReceiveNewsletter", value: notification });
//     console.log(formData);

//     $.ajax({
//       url: "https://www.fulek.com/mvc/supit/project-contact-form",
//       method: "POST",
//       contentType: "application/json", // tip podataka koji se salje na server
//       data: JSON.stringify(formData),
//       success: (response) => {
//         console.log("Uspješno poslano:", response);
//       },
//       error: (error) => {
//         console.log("Greška:", error);
//       }
//     });
    
//   });
// });
