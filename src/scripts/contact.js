let contactForm = document.getElementById("contactForm");
let url="http://localhost:3500"
var toastventana = document.getElementById('liveToast')
var btnContact = document.getElementById('btnContact')
var toast = new bootstrap.Toast(toastventana)

contactForm.addEventListener("submit", async (e) => {
     e.preventDefault();
     
    if (!contactForm.checkValidity()) {
        e.stopPropagation()
        toastAviso("Por favor llena correctamente todos los campos del formulario","please fill out the entire form",false)

        contactForm.classList.add('was-validated')

    }else{
        btnContact.innerHTML=`<div class="spinner-border spinner-border-sm " role="status"><span class="visually-hidden">Loading...</span></div>`
        const form = new FormData(contactForm)
        const response = await fetch(url+'/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: form.get('username'),
                email: form.get('email'),
                message: form.get('message'),
            })
        });
        const data = await response.json();
        if (localStorage.getItem("lang")=="en") btnContact.innerHTML="Send"
        else btnContact.innerHTML="Enviar"
        if (data) {
            toastAviso("Formulario enviado exitosamente!","Form submitted successfully!",true)
            btnContact.disabled=true
            return true
        }
        toastAviso("error, intentelo de nuevo mas tarde","error, try again later",false)   
 
    }
    //aqui ya se agarran las variables y se envian. solo pondre un log con las variables
});
// toast.show()
function toastAviso(mensaje,message, tipo) {
    var toastHeader = document.getElementById('toastHeader')
    var toastAdvice = document.getElementById('toastAdvice')

    if (!tipo) {
        toastHeader.classList.remove("bg-success")
        toastHeader.classList.add("bg-danger")
        if (localStorage.getItem("lang")=="en") 
        toastAdvice.innerHTML='<i class="bi bi-exclamation-circle" style="color:red !important"></i>&nbsp;'+message
        else toastAdvice.innerHTML='<i class="bi bi-exclamation-circle" style="color:red !important"></i>&nbsp;'+mensaje
        toast.show()
        return false
    }
    toastHeader.classList.remove("bg-danger")
    toastHeader.classList.add("bg-success")
    if (localStorage.getItem("lang")=="en") toastAdvice.innerHTML='<i class="bi bi-exclamation-circle" style="color:green !important"></i>&nbsp;'+message
    else toastAdvice.innerHTML='<i class="bi bi-exclamation-circle" style="color:green !important"></i>&nbsp;'+mensaje
    toast.show()
}