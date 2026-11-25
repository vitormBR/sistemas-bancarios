import type { Cliente } from "../Cliente";
import type { INotificacao } from "../interfaces/INotificacao";

export class NotificacaoApp implements INotificacao {
    enviar(mensagem: string, cliente: Cliente): void {
        console.log(`[APP para ${cliente.nome}] ${mensagem}`);
    }
}
