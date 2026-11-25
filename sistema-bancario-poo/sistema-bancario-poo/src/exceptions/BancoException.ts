export abstract class BancoException extends Error {
    constructor(mensagem: string) {
        super(mensagem);
        this.name = new.target.name;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

export class ValorInvalidoException extends BancoException {
    constructor() {
        super("Valor inválido para a operação.");
    }
}

export class ContaBloqueadaException extends BancoException {
    constructor() {
        super("A conta está bloqueada.");
    }
}

export class SaldoInsuficienteException extends BancoException {
    constructor(public readonly quantoFalta: number) {
        super(`Saldo insuficiente. Faltam R$ ${quantoFalta.toFixed(2)}.`);
    }
}

export class LimiteDiarioException extends BancoException {
    constructor() {
        super("Limite diário de saques excedido.");
    }
}
