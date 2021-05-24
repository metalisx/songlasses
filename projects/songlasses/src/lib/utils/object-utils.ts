export class ObjectUtils {

    static isObject<T>(object: T) {
        return (object !== undefined && object !== null && typeof object === 'object' && !Array.isArray(object));
    }

    static getKeys<T>(obj: T): Array<keyof T> {
        if (obj === undefined || obj === null) return [];
        return Object.keys(obj) as Array<keyof T>;
    }

}
