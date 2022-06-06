let botaoBuscar = document.querySelector("#busca-pacientes");

botaoBuscar.addEventListener("click", function(){
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

        let erroBusca = document.querySelector("#erro-ajax");

        if(xhr.status == 200){
            erroBusca.classList.add("invisivel");
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        } else{
            erroBusca.classList.remove("invisivel");
        }
        
        

    });
    

    xhr.send();
});

