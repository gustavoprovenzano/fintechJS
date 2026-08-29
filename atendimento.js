let fila = [];
function adicionarCliente(){
    let nome = prompt("Digite o nome do cliente:");
    if(nome){
        let confirma = confirm(`Digite o nome do cliente ${nome}:`);
        if(confirma){
        fila.push(nome);
        }
    }else{
        alert("Você não digiotou o nome!");
    }
} 

function atenderCliente(){
    if(fila.length > 0){
        let nome = fila.shift();
        alert(`Cliente ${nome} atendido!`);
    }else{
        alert("Fila Vazia");
    }
}