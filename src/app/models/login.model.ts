import {Deserializable} from './deserializable.model';

export class Login implements Deserializable {

    public Id;
    public Nome;
    public NomeLoja;
    public Email;
    public Senha;

    deserialize(input: any): this {
         return Object.assign(this, input);
    }

    serialize(input: this): any {
        return JSON.stringify(input);
    }

}
