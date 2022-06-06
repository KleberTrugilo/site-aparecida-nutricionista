let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",function(){
    let pacientes = document.querySelectorAll(".paciente");
    if(this.value.length > 0){
        for (let i = 0; i <pacientes.length; i++){
            let paciente = pacientes[i];
            let nome = paciente.querySelector(".info-nome").textContent;

            let expressao = new RegExp(this.value, "i");// "i" para ser case insensitive.
            if (expressao.test(nome)){
                paciente.classList.remove("invisivel");
            } else {
                paciente.classList.add("invisivel");
            }
        }
    } else{
        for (let i = 0; i <pacientes.length; i++){
            let paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }  
});
