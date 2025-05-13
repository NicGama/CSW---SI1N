function enviardados(){
    document.getElementById("inputusuario").innerHTML = "Nome enviado foi: " + window.prompt("Digite seu nome: ")

}

function exibirnome(){
    window.alert("Nome digitado foi: " + document.getElementById("nome").value);
}