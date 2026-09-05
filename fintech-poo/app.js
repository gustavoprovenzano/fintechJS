import { ContaCorrente } from "./conta-corrente.js";

let conta1 = new ContaCorrente (1, "Luiz", 1000);
console.log (`Conta de: ${conta1.nomeCliente}\nSaldo : ${conta1.saldo}`);

conta1.depositar(100);
console.log(conta1.saldo);
conta1.sacar(200);
console.log(conta1.saldo);

let conta2 = new ContaCorrente(2,"Ana", 500);
console.log (`Conta de: ${conta2.nomeCliente}\nSaldo : ${conta2.saldo}`);
console.log(conta2.saldo);
conta2.pagar(450);