import { Deserializable } from './deserializable.model';

export class Produto implements Deserializable {


    deserialize(input: any): this {
        return Object.assign(this, input);
    }

}
