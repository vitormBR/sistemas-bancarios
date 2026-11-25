import type { Cliente } from "./Cliente";
import {
    ValorInvalidoException,
    ContaBloqueadaException,
    SaldoInsuficienteException,
    LimiteDiarioException
} from "./exceptions/BancoException";

export class Conta {
    private totalSacadoHoje = 0;
    private bloqueada = false;

    constructor(
        public readonly numero: number,
        public readonly agencia: number,
        public readonly dataAbertura: Date,
        private saldo: number,
        public readonly limiteDiario: number,
        private readonly titular: Cliente
    ) {
        if (!Number.isFinite(saldo) || saldo < 0) {
            throw new ValorInvalidoException();
        }
        if (!Number.isFinite(limiteDiario) || limiteDiario <= 0) {
            throw new ValorInvalidoException();
        }
    }

    sacar(valor: number): void {
        try {
            if (!Number.isFinite(valor) || valor <= 0) {
                throw new ValorInvalidoException();
            }
            if (this.bloqueada) {
                throw new ContaBloqueadaException();
            }
            if (valor > this.saldo) {
                throw new SaldoInsuficienteException(valor - this.saldo);
            }
            if (this.totalSacadoHoje + valor > this.limiteDiario) {
                throw new LimiteDiarioException();
            }

            this.saldo -= valor;
            this.totalSacadoHoje += valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado. Saldo: R$ ${this.saldo.toFixed(2)}.`);
        } catch (erro: unknown) {
            if (erro instanceof Error) {
                this.titular.notificar(erro.message);
            } else {
                this.titular.notificar("Ocorreu um erro inesperado.");
            }
        }
    }

    depositar(valor: number): void {
        try {
            if (!Number.isFinite(valor) || valor <= 0) {
                throw new ValorInvalidoException();
            }
            if (this.bloqueada) {
                throw new ContaBloqueadaException();
            }

            this.saldo += valor;
            console.log(`Depósito de R$ ${valor.toFixed(2)} realizado. Saldo: R$ ${this.saldo.toFixed(2)}.`);
        } catch (erro: unknown) {
            if (erro instanceof Error) {
                this.titular.notificar(erro.message);
            } else {
                this.titular.notificar("Ocorreu um erro inesperado.");
            }
        }
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    bloquear(): void {
        this.bloqueada = true;
    }

    desbloquear(): void {
        this.bloqueada = false;
    }

    reiniciarLimiteDiario(): void {
        this.totalSacadoHoje = 0;
    }
}
