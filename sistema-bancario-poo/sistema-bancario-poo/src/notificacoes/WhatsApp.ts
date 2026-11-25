import type { Cliente } from "../Cliente";
import type { INotificacao } from "../interfaces/INotificacao";

export class WhatsApp implements INotificacao {
    enviar(mensagem: string, cliente: Cliente): void {
        console.log(`[WHATSAPP para ${cliente.nome}] ${mensagem}`);
    }
}
