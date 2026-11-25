import type { Cliente } from "../Cliente";
import type { INotificacao } from "../interfaces/INotificacao";

export class SMS implements INotificacao {
    enviar(mensagem: string, cliente: Cliente): void {
        console.log(`[SMS para ${cliente.nome}] ${mensagem}`);
    }
}
