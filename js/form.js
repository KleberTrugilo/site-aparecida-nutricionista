let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");

    let paciente = obtemPacientesFormulario(form);

    let erros = validaPaciente(paciente);

    if (erros.length > 0) {
        mostraMensagemErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();

    let mensagensErro = document.querySelector("#mensagens-erros");
    mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){
    let pacienteTr = montaTr(paciente);
    let tabela = montarTabela(pacienteTr);
}

function obtemPacientesFormulario(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTd(classe, dado) {
    let td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}
 function montaTr(paciente){
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd("info-nome", paciente.nome));
    pacienteTr.appendChild(montaTd("info-peso", paciente.peso));
    pacienteTr.appendChild(montaTd("info-altura", paciente.altura));
    pacienteTr.appendChild(montaTd("info-gordura", paciente.gordura));
    pacienteTr.appendChild(montaTd("info-imc",paciente.imc));

    return pacienteTr;
 }

 function montarTabela(pacienteTr){
     let tabela = document.querySelector("#tabela-pacientes");
     tabela.appendChild(pacienteTr);

     return tabela;
 }

function validaPaciente(paciente) {
    let erros = [];
    if (paciente.nome.length == 0) erros.push ("O nome deve ser preenchido.");
    if (paciente.peso.length == 0) erros.push ("O peso deve ser preenchido.");
    if (paciente.altura.length == 0) erros.push ("A altura deve ser preenchida.");
    if (paciente.gordura.length == 0) erros.push ("A porcentagem de gordura deve ser preenchida.");
    if (!validaPeso(paciente.peso)) erros.push ("Peso inválido.");
    if (!validaAltura(paciente.altura)) erros.push ("Altura inválida.");
    return erros;
}

function mostraMensagemErro(erros){
    let ul = document.querySelector("#mensagens-erros");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li)
    });
}
