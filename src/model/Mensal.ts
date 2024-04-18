import { Conta} from "./Conta";

export class Mensal extends Conta {
    private _limite: number;

    constructor(numero: number, tipo: number, pagamento: number, limite: number) {
        super(numero,tipo,pagamento);
        this._limite = limite
    }
    public get limite(){
        return this._limite;
    }
    public set limite(limite:number){
        this._limite = limite
    }
    public visualizar(): void {
        super.visualizar();
        console.log( "Seu Número de ID!",this.numero);
        console.log("Seu tipo de Mensalidade! 1 Mensal/ 2 Semestral", this.tipo);
        console.log("Pagamento efetuado referente ao mês", this.pagamento);
        console.log("Você só pode treinar", this.limite, "Dias na semana.")
    }
}
