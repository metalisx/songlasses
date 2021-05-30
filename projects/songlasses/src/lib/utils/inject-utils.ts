import { inject, InjectFlags, Type } from "@angular/core";

export class InjectUtils {

    /**
     * Throw error if the type is already instantiated.
     * Use it to safeguard a singelton service.
     * 
     * @param type 
     */
    static throwErrorIfExists<T>(type: Type<T>) {
        if (inject(type, InjectFlags.Optional | InjectFlags.SkipSelf) !== null) {
            throw Error(`Trying to create multiple instances of singleton service ${type.name}.`);
        }
    }

}
