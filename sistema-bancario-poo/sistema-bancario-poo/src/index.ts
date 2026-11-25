import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { SMS } from "./notificacoes/SMS";
import { Email } from "./notificacoes/Email";
import { NotificacaoApp } from "./notificacoes/NotificacaoApp";
import { WhatsApp } from "./notificacoes/WhatsApp";

console.log("\\n===== CRIAÇÃO DOS CLIENTES E CONTAS =====");

const joao = new Cliente("João", "111.111.111-11", "Recife", 3000, new SMS());
const maria = new Cliente("Maria", "222.222.222-22", "Jaboatão", 4500, new Email());
const pedro = new Cliente("Pedro", "333.333.333-33", "Olinda", 2500, new NotificacaoApp());
const ana = new Cliente("Ana", "444.444.444-44", "Paulista", 5000, new WhatsApp());

const contaJoao = new Conta(1001, 123, new Date(), 100, 500, joao);
const contaMaria = new Conta(1002, 123, new Date(), 500, 100, maria);
const contaPedro = new Conta(1003, 123, new Date(), 500, 100, pedro);
const contaAna = new Conta(1004, 123, new Date(), 500, 300, ana);

joao.adicionarConta(contaJoao);
maria.adicionarConta(contaMaria);
pedro.adicionarConta(contaPedro);
ana.adicionarConta(contaAna);


console.log("\\n===== 1. VALOR INVÁLIDO (2 EXEMPLOS) =====");
contaJoao.sacar(-50);
contaJoao.sacar(0);


console.log("\\n===== 2. CONTA BLOQUEADA (2 EXEMPLOS) =====");
contaMaria.bloquear();
contaMaria.sacar(50);
contaMaria.sacar(100);


console.log("\\n===== 3. SALDO INSUFICIENTE (2 EXEMPLOS) =====");
contaJoao.sacar(150); 
contaJoao.sacar(200);  


console.log("\\n===== 4. LIMITE DIÁRIO EXCEDIDO (2 EXEMPLOS) =====");
contaPedro.sacar(80);
contaPedro.sacar(30);
contaPedro.sacar(40);


console.log("\\n===== 5. OPERAÇÕES VÁLIDAS =====");
contaJoao.depositar(100);
contaJoao.sacar(50);
contaAna.depositar(200);
contaAna.sacar(100);


console.log("\\n===== 6. CONSULTA DE SALDO =====");
console.log(`Saldo de João: R$ ${contaJoao.consultarSaldo().toFixed(2)}`);
console.log(`Saldo de Ana: R$ ${contaAna.consultarSaldo().toFixed(2)}`);


console.log("\\n===== 7. CANAIS DE NOTIFICAÇÃO =====");
joao.notificar("Mensagem de teste por SMS.");
maria.notificar("Mensagem de teste por e-mail.");
pedro.notificar("Mensagem de teste pelo aplicativo.");
ana.notificar("Mensagem de teste pelo WhatsApp.");


console.log("\\n===== 8. TROCA DE CANAL =====");
joao.trocarNotificacao(new WhatsApp());
joao.notificar("Agora João recebe avisos por WhatsApp.");
