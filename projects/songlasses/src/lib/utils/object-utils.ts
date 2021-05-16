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
     static copyArray(destination: object[], ...sources: object[][]): object[] {
        return ObjectUtils.internalCopyArray(true, destination, ...sources);
    }

    /**
     * Copy properties from the source objects to the destination object.
     * When copying objects with the same property, the value of the property in the last source object is set in the destination object.
     * 
     * @param destination
     * @param sources
     */
    static assign(destination: object, ...sources: object[]): object {
        return ObjectUtils.internalCopyObject(true, destination, ...sources);
    }

    /**
     * Merge only properties from the source objects which are not present in the destination object to the destination object.
     * When merging objects with the same property, the value of the first source object containing the property is set in the destination object.
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
    private static internalCopyObject(copyKnownProperties: boolean, destination: object, ...sources: object[]): object {
        if (!sources.length) {
            return destination;
        }
        let source: object | undefined = sources.shift();
        if (source !== undefined && ObjectUtils.isObject(destination) && ObjectUtils.isObject(source)) {
            ObjectUtils.getKeys(source).forEach(key => {
                if (source && (copyKnownProperties || (!copyKnownProperties && !destination[key]))) {
                    if (ObjectUtils.isObject(source[key])) {
                        Object.assign(destination, { [key]: ObjectUtils.internalCopyObject(copyKnownProperties, {}, source[key]) });
                    } else if (ObjectUtils.isArray(source[key])) {
                        Object.assign(destination, { [key]: ObjectUtils.internalCopyArray(copyKnownProperties, [], source[key]) });
                    } else {
                        Object.assign(destination, { [key]: source[key] });
                    }
                }
            });
        }
        return ObjectUtils.internalCopyObject(copyKnownProperties, destination, ...sources);
    }

    /**
     * Somewhat excesive statements just for preventing type check errors.
     */
     private static internalCopyArray(copyKnownProperties: boolean, destination: object[] = [], ...sources: object[][]): object[] {
        if (!sources.length) {
            return destination;
        }
        let source: object[] | undefined = sources.shift();
        if (source !== undefined && ObjectUtils.isArray(destination) && ObjectUtils.isArray(source)) {
            source.forEach((item, index) => {
                if (item) {
                    if (ObjectUtils.isObject(item)) {
                        ObjectUtils.push(destination, ObjectUtils.internalCopyObject(copyKnownProperties, {}, item));
                    } else if (ObjectUtils.isArray(item)) {
                        ObjectUtils.push(destination, ObjectUtils.internalCopyArray(copyKnownProperties, [], item as Array<object>));
                    } else {
                        destination[index] = item;
                    }
                }
            });
        }
        return destination;
    }

    private static push<T>(destination: T[], item: T): T[] {
        destination.push(item);
        return destination;
    }

}
