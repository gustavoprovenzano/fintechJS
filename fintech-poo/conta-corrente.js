export class ContaCorrente{
    //Caracteristicas - Atributos
    numero
    nomeCliente
    saldo

    constructor(pNum, pNome, pSaldo = 0){
        this.numero = pNum;
        this.nomeCliente = pNome;
        this.saldo = pSaldo;
    }
    //Ações - Metodos
    depositar(pvalor){
        this.saldo += pvalor;
    }

    sacar(pvalor){
        if(pvalor < this.saldo){
            this.saldo -= pvalor;
        }else{
            console.log("Saldo Insuficiente");
        }
    }
}