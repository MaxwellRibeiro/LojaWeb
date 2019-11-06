import { Deserializable } from './deserializable.model';

export class Produto implements Deserializable {

    public Id;
    public Nome;
    public UrlFoto;
    public NomeLoja;
    public Descricao;
    public Preco;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }

    serialize(input: this): any {
        return JSON.stringify(input);
    }

}
