import { Conta } from "./Conta";

export class Semestral extends Conta {
    private _aniversario: number;

    constructor(numero: number, tipo: number,pagamento:number , aniversario: number, ) {
        super(numero, tipo, pagamento);
        this._aniversario = aniversario;
    }

    public get aniversario(): number {
        return this._aniversario;
    }

    public set aniversario(aniversario: number) {
        this._aniversario = aniversario;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(this.numero, "Seu Número de ID!");
        console.log(this.tipo, "Seu tipo de Mensalidade! 1 Mensal/ 2 Semestral");
        console.log(this.pagamento, "Pagamento efetuado referente ao mês");
        console.log("Você não tem limites de treinamento!")
        console.log("No Mês do seu aniversário, No dia : " + this._aniversario + ", você vai ganhar 1 Mês grátis");
    }
}
