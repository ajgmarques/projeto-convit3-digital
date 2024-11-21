import { v4 as uuid, validate } from 'uuid';

export default class Id {
  static novo(): string {
    return uuid();
  }

  static valido(id: string): boolean {
    return validate(id)
  }
}

// for(let i = 0; i < 10; i++ ) {
//   console.log(Id.novo())
// }

// console.log(Id.valido('361e8fc9-dea0-4275-b9ec-1cb788a28854'))