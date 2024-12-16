const form = document.getElementById("form-numero");
const btn = document.getElementById("sub");


function validaNumero(event) {
    const nB = parseInt(document.getElementById("nB").value);
    const nA = parseInt(document.getElementById("nA").value);
    

    event.preventDefault();

    if (nB>nA){
        btn.disabled = false;
        alert("Formulário válido. Enviando...");
        form.submit();
        form.reset();
    } else{
        alert("form invalido, B precisa ser maior que 1");
        form.refresh();
    }
    
}

form.addEventListener("submit", validaNumero)