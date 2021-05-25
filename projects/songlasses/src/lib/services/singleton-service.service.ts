import { inject, InjectFlags, Type } from "@angular/core";

export class SingletonService<T> {

    constructor(type: Type<T>) {
      if (inject(type, InjectFlags.Optional | InjectFlags.SkipSelf)) {
        throw Error(`Trying to create multiple instances of singleton service ${type.name}.`);
      }
    }

}
