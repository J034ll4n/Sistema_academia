import { Cosmetico } from './src/model/Cosmetico';
import { Medicamento } from './src/model/Medicamento';
import { colors } from './src/util/Cores';
import { ProdutoController } from './src/controller/ProdutoController';
import readlinesync from "readline-sync";


export function main() {


    let opcao: number, id: number, tipo: number, preco: number;
    let nome: string, generico: string, fragrancia: string;
    let TipoProduto = ['Medicamento', 'Cosmetico'];

    const produtoController: ProdutoController = new ProdutoController();



    while (true) {

        console.log(colors.bg.black, colors.fg.magenta,)
        console.log("***********************************************");
        console.log("                                               ");
        console.log("             FARMACIA CANTAREIRA               ");
        console.log("                                               ");
        console.log("************xx****************xx***************");
        console.log("***********************************************");
        console.log("********tecle o numero que deseja acessar******");
        console.log("                                               ");
        console.log("          1) Criar Produto                     ");
        console.log("          2) Listar Todos os Produtos          ");
        console.log("          3) Consultar Produto por ID          ");
        console.log("          4) Atualizar Produto                 ");
        console.log("          5) Deletar Produto                   ");
        console.log("          0) Sair                              ");
        console.log("***********************************************");
        console.log("                                               ",
            colors.reset);


        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.greenstrong,
                "\nFarmácia Bem Estar - Medicamento Barato é aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Produto\n\n", colors.reset);

                nome = readlinesync.question("Digite o Nome do Produto: ");
                tipo = readlinesync.keyInSelect(TipoProduto, "", { cancel: false }) + 1;
                preco = readlinesync.questionFloat("Digite o preco: ");

                switch (tipo) {
                    case 1:
                        generico = readlinesync.question("Digite o nome do Generico: ");
                        produtoController.cadastrar(new Medicamento(produtoController.gerarId(),
                            nome, tipo, preco, generico));
                        break;
                 
                   case 2:
                        fragrancia = readlinesync.question("Digite a fragancia do Cosmetico: ");
                        produtoController.cadastrar(new Cosmetico(produtoController.gerarId(),
                            nome, tipo, preco, fragrancia));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todos os Produtos\n\n", colors.reset);

                produtoController.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados do Produto - por Id\n\n", colors.reset);

                id = readlinesync.questionInt("Digite o Id do Produto: ");
                produtoController.procurarPorId(id);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados do Produto\n\n", colors.reset);

                id = readlinesync.questionInt("Digite o Id do Produto: ");

                let produto = produtoController.buscarNoArray(id);
                if (produto !== null) {
                    nome = readlinesync.question("Digite o Nome do Produto: ");
                    tipo = produto.tipo;
                    preco = readlinesync.questionFloat("Digite o preco: ");

                    switch (tipo) {
                        case 1:
                            generico = readlinesync.question("Digite o Nome Generico do Medicamento: ");
                            produtoController.atualizar(new Medicamento(id,
                                nome, tipo, preco, generico));

                        case 2:
                            fragrancia = readlinesync.question("Digite a frangancia do Cosmetico: ");
                            produtoController.atualizar(new Cosmetico(id,
                                nome, tipo, preco, fragrancia));

                    }

                } else
                    console.log("Produto não Encontrado!")

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar um Produto\n\n", colors.reset);

                id = readlinesync.questionInt("Digite o Id do Produto: ");
                produtoController.deletar(id)

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}
function sobre(): void {
    console.log("*****************************************************");
    console.log("Projeto Desenvolvido por: Jennifer Fernandes ");
    console.log("Generation Brasil - jennyfrn6104@gmail.com");
    console.log("github.com/ jennizs");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();