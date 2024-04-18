import { Conta } from "../model/Conta";

export interface ContaRepository {
    procurarPorNumero(numero: number): void;
    listarTodas():void
    cadastrar(conta:Conta):void
    atualizar(conta:Conta):void
    deletar(numero:number):void



    //METODOS 
    //pagar(numero:number, pagamento:number)
    
}