# Sistema Bancário - POO

Projeto didático em TypeScript com classes, associação, interface, herança, polimorfismo e exceções personalizadas.

## Requisitos
- Node.js instalado
- npm

## Como executar
No terminal, dentro da pasta do projeto:

```bash
npm install
npm run dev
```

Ou para compilar e executar:

```bash
npm run build
npm start
```

O diagrama UML está no arquivo `diagrama-sistema-bancario.drawio`. Abra https://app.diagrams.net/ e escolha **Arquivo > Importar de > Dispositivo**.

## Observação
O limite diário é controlado em memória e pode ser reiniciado com `reiniciarLimiteDiario()`. Em um sistema real, a data e os dados precisariam ser persistidos em banco de dados.
