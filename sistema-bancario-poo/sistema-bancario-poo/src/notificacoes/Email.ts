import type { Cliente } from "../Cliente";
import type { INotificacao } from "../interfaces/INotificacao";

export class Email implements INotificacao {
    enviar(mensagem: string, cliente: Cliente): void {
        console.log(`[E-MAIL para ${cliente.nome}] ${mensagem}`);
    }
}
