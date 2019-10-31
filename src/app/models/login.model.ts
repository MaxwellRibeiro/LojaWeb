import {Deserializable} from './deserializable.model';

export class Login implements Deserializable {

    public Email;
    public Senha;

    deserialize(input: any): this {
         return Object.assign(this, input);
    }

}
