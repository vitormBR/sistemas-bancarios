import type { Conta } from "./Conta";
import type { INotificacao } from "./interfaces/INotificacao";

export class Cliente {
    private readonly contas: Conta[] = [];

    constructor(
        public readonly nome: string,
        public readonly cpf: string,
        public readonly endereco: string,
        public readonly renda: number,
        private notificacao: INotificacao
    ) {}

    adicionarConta(conta: Conta): void {
        this.contas.push(conta);
    }

    listarContas(): readonly Conta[] {
        return this.contas;
    }

    notificar(mensagem: string): void {
        this.notificacao.enviar(mensagem, this);
    }

    trocarNotificacao(notificacao: INotificacao): void {
        this.notificacao = notificacao;
    }
}
