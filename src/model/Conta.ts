
export abstract class Conta{
    private _numero: number;
    private _tipo: number;
    private _pagamento: number;

constructor(numero: number, tipo: number, pagamento: number){
    this._numero = numero;
    this._tipo = tipo;
    this._pagamento = pagamento;
    }

    public get numero(){
        return this._numero;
    }
    public set numero(numero: number){
        this._numero = numero;
    }


    public get tipo(){
        return this._tipo
    }
    public set tipo(tipo:number){
        this._tipo = tipo;
    }


    public get pagamento(){
        return this._pagamento
    }
    public set pagamento(pagamento:number){
        this._pagamento = pagamento;
    }

    public visualizar(): void {
        let tipo: string = "";

        switch (this._tipo){
            case 1:
                tipo = "Conta Mensal"
                break;
            case 2:
                tipo = "Conta Semestral"
                break;
        }
    }
    public pagar(pagamento: number): boolean {
        if (pagamento < 60) {
            console.log("O valor é menor que a mensalidade!");
            return false;
        } else {
            console.log("Pagamento efetuado com sucesso!");
            this.pagamento = pagamento; // Update the payment amount
            return true;
        }
        this.pagamento > this.pagamento
        return true;
    }
    

}