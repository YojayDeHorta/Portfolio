let contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
     e.preventDefault();
    if (!contactForm.checkValidity()) {
        e.stopPropagation()
        contactForm.classList.add('was-validated')

    }else{
        console.log("nombre: ");
    }
    //aqui ya se agarran las variables y se envian. solo pondre un log con las variables
});