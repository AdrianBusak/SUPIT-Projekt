const btn = document.querySelector("#form-modal");

btn.addEventListener("submit",()=>{
    const checkBox = document.querySelector("#ReceiveNewsletter");
    if(checkBox.checked){
        checkBox.value = "true";
    }
    else{
        checkBox.value = "false";
    }
});