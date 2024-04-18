import readlinesync from "readline-sync";
import { ContaController } from "./src/controller/ContaController";
import { Semestral } from "./src/model/Semestral";
import { Mensal } from "./src/model/Mensal";

export function main() {
    const contas = new ContaController();
    let opcao, numero, tipo, pagamento, limite, aniversario;

    const tiposContas = ["Mensal", "Semestral"];

    while (true) {
        console.log("********************************************************");
        console.log("*                   ACADEMIA DE TODES                  *");
        console.log("********************************************************");
        console.log("*                                                      *");
        console.log("*               1 - Criar conta                        *");
        console.log("*               2 - Listar todas as Contas             *");
        console.log("*               3 - Buscar Conta por Número            *");
        console.log("*               4 - Atualizar dados da Conta           *");
        console.log("*               5 - Apagar Conta                       *");
        console.log("*               6 - Sair                               *");
        console.log("*                                                      *");
        console.log("*                       _____                          *");
        console.log("*                      ( o.o )                         *");
        console.log("*                       > u <                          *");
        console.log("********************************************************");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao === 6) {
            console.log("\n Generation Brasil!");
            sobre();
            break; // Sair do loop while
        }

        switch (opcao) {
            case 1:
                console.log("\nCriar Conta\n");
                console.log("Digite o número de Registro:");
                numero = readlinesync.question("");

                console.log("Digite o tipo de plano: Mensal/Semestral");
                tipo = readlinesync.keyInSelect(tiposContas, "", { cancel: false }) + 1;

                console.log("Digite o valor do Pagamento:");
                pagamento = parseFloat(readlinesync.question(""));
                if (pagamento < 59) {
                    console.log("Não é o valor correto da mensalidade, você não vai poder criar a conta! ");
                    waitForEnter();
                    continue; 
                }

                switch (tipo) {
                    case 1:
                        console.log("Quantos dias na semana você irá treinar?");
                        limite = readlinesync.questionFloat("");
                        if (limite >= 4) {
                            console.log("Você só pode treinar até 3 dias na semana.");
                            waitForEnter();
                            continue;
                        }
                        contas.cadastrar(new Mensal(contas.gerarNumero(), tipo, pagamento, limite));
                        break;
                
                    case 2:
                        console.log("Digite o Dia do seu aniversário?");
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(new Semestral(contas.gerarNumero(), tipo, pagamento, aniversario));
                        break;
                }
                waitForEnter();
                break;

            case 2:
                console.log("\nListar todas as Contas\n");
                contas.listarTodas();
                waitForEnter();
                break;

            case 3:
                console.log("\nBuscar Conta por Número\n");
                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");
                contas.procurarPorNumero(numero);
                waitForEnter();
                break;

            case 4:
                console.log("\n Atualizar dados da Conta\n");
                console.log("Digite o número da Conta:");
                numero = readlinesync.questionInt("");

                const conta = contas.buscarNoArray(numero);
                if (conta !== null) {
                    console.log("Atualize o valor pago:");
                    pagamento = parseFloat(readlinesync.question(""));
                }
                waitForEnter();
                break;

            case 5:
                console.log("\nApagar Conta\n");
                console.log("Digite o número da Conta:");
                numero = readlinesync.questionInt("");
                contas.deletar(numero);
                waitForEnter();
                break;

            default:
                console.log("\nopção Inválida\n");
                waitForEnter();
                break;
        }
    }
}

function waitForEnter() {
    console.log("Pressione Enter para continuar...");
    readlinesync.prompt();
}

export function sobre(): void {
    console.log("***********************************");
    console.log(" Projeto Desenvolvido por: Jennizs ");
    console.log("        Generation Brasil          ");
    console.log("    https://github.com/jennizs     ");
    console.log("***********************************");
}

main();
