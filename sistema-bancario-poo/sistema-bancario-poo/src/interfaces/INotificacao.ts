import type { Cliente } from "../Cliente";

export interface INotificacao {
    enviar(mensagem: string, cliente: Cliente): void;
}
