export class ObjectUtils {

    /**
     * Returns true if two source objects are the same.
     *
     * The source objects are stringified with JSON and then compared.
     */
    static equals<T, U>(source1: T, source2: U): boolean {
        return JSON.stringify(source1) === JSON.stringify(source2);
    }

    static isFunction<T>(object: T) {
        return (object !== undefined && object !== null && typeof object === 'function');
    }

    static isObject<T>(object: T) {
        return (object !== undefined && object !== null && typeof object === 'object' && !Array.isArray(object));
    }

    static isArray<T>(object: T) {
        return (object !== undefined && object !== null && typeof object === 'object' && Array.isArray(object));
    }

    static getKeys<T>(obj: T): Array<keyof T> {
        if (obj === undefined || obj === null) return [];
        return Object.keys(obj) as Array<keyof T>;
    }
    
    /**
     * Removing all items from the array. Use this method to keep references to the array alive.
     * 
     * @param items 
     * @returns 
     */
    static clearArray<T>(items: T[]) {
        items.splice(0, items.length);
        return items;
    }

    /**
     * Copy items from sources to destination.
     * 
     * @param destination
     * @param sources
     */
     static copyArray(destination: any[], ...sources: any[][]): any[] {
        return ObjectUtils.internalCopyArray(true, destination, ...sources);
    }

    /**
     * Copy properties from the source object(s) to the destination object.
     * Override existing properties with properties from subsequent parameters.
     * 
     * @param destination
     * @param sources
     */
    static assign(destination: object, ...sources: object[]): object {
        return ObjectUtils.internalCopyObject(true, destination, ...sources);
    }

    /**
     * Merge properties from the source object(s) which are not present in the destination object to the destination object.
     * Does not override existing properties with properties from subsequent parameters.
     * 
     * @param destination
     * @param sources
     */
     static merge(destination: object, ...sources: object[]): object {
        return ObjectUtils.internalCopyObject(false, destination, ...sources);
    }

    /**
     * Somewhat excesive statements just for preventing type check errors.
     */
    private static internalCopyObject(override: boolean, destination: object, ...sources: object[]): object {
        if (!sources.length) {
            return destination;
        }
        let source: object | undefined = sources.shift();
        if (source !== undefined && ObjectUtils.isObject(destination) && ObjectUtils.isObject(source)) {
            ObjectUtils.getKeys(source).forEach(key => {
                if (source && (override || (!destination[key]))) {
                    if (ObjectUtils.isObject(source[key])) {
                        Object.assign(destination, { [key]: ObjectUtils.internalCopyObject(override, {}, source[key] as object) });
                    } else if (ObjectUtils.isArray(source[key])) {
                        Object.assign(destination, { [key]: ObjectUtils.internalCopyArray(override, [], source[key] as Array<any>) });
                    } else {
                        Object.assign(destination, { [key]: source[key] });
                    }
                }
            });
        }
        return ObjectUtils.internalCopyObject(override, destination, ...sources);
    }

    /**
     * Somewhat excesive statements just for preventing type check errors.
     */
     private static internalCopyArray(override: boolean, destination: any[] = [], ...sources: any[][]): any[] {
        if (!sources.length) {
            return destination;
        }
        let source: any[] | undefined = sources.shift();
        if (source !== undefined && ObjectUtils.isArray(destination) && ObjectUtils.isArray(source)) {
            source.forEach((item) => {
                if (item) {
                    if (ObjectUtils.isObject(item)) {
                        ObjectUtils.push(destination, ObjectUtils.internalCopyObject(override, {}, item as object));
                    } else if (ObjectUtils.isArray(item)) {
                        ObjectUtils.push(destination, ObjectUtils.internalCopyArray(override, [], item as Array<any>));
                    } else {
                        destination[destination.length] = item;
                    }
                }
            });
        }
        return ObjectUtils.internalCopyArray(override, destination, ...sources);;
    }

    private static push<T>(destination: T[], item: T): T[] {
        destination.push(item);
        return destination;
    }

}
