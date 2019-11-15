import { Deserializable } from './deserializable.model';

export class Compra implements Deserializable {

    public Id;
    public IdProduto;
    public NomeProduto;
    public NomeLoja;
    public Quantidade;
    public PrecoTotal;

    deserialize(input: any): this {
         return Object.assign(this, input);
    }

    serialize(input: this): any {
        return JSON.stringify(input);
    }
}
