export class FunctionUtils {

    static isFunction<T>(object: T) {
        return (object !== undefined && object !== null && typeof object === 'function');
    }

}
