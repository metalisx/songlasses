export class ObjectUtils {

    /**
     * Returns true if two source objects are the same.
     *
     * The source objects are stringified with JSON and then compared.
     */
    static equals<T>(source1: T, source2: T): boolean {
        return JSON.stringify(source1) === JSON.stringify(source2);
    }

    static isFunction<T>(object: T) {
        return (object && typeof object === 'function');
    }

    static isObject<T>(object: T) {
        return (object && typeof object === 'object' && !Array.isArray(object));
    }

    static isArray<T>(object: T) {
        return (object && typeof object === 'object' && Array.isArray(object));
    }

    static getKeys<T>(obj: T): Array<keyof T> {
        return Object.keys(obj) as Array<keyof T>;
    }
    
    /**
     * Copy properties from sources to destination.
     * When merging objects with the same property, the value of the property in the last source is set in the destination.
     * 
     * @param destination
     * @param sources
     */
    static assign(destination: object, ...sources: object[]): object {
        return ObjectUtils.copyObject(true, destination, ...sources);
    }

    /**
     * Merge only properties in sources which are not present in destination to destination.
     * When merging objects with the same property, the value of the first found property is set in the destination.
     * 
     * @param destination
     * @param sources
     */
     static merge(destination: object, ...sources: object[]): object {
        return ObjectUtils.copyObject(false, destination, ...sources);
    }

    /**
     * Somewhat excesive statements just for preventing type check errors.
     */
    private static copyObject(copyKnownProperties: boolean, destination: object, ...sources: object[]): object {
        if (!sources.length) {
            return destination;
        }
        let source: object | undefined = sources.shift();
        if (source && ObjectUtils.isObject(destination) && ObjectUtils.isObject(source)) {
            ObjectUtils.getKeys(source).forEach(key => {
                if (source && (copyKnownProperties || (!copyKnownProperties && !destination[key]))) {
                    if (ObjectUtils.isObject(source[key])) {
                        Object.assign(destination, { [key]: ObjectUtils.copyObject(copyKnownProperties, {}, source[key]) });
                    } else if (ObjectUtils.isArray(source[key])) {
                        Object.assign(destination, { [key]: ObjectUtils.copyArray(copyKnownProperties, [], source[key]) });
                    } else {
                        Object.assign(destination, { [key]: source[key] });
                    }
                }
            });
        }
        return ObjectUtils.copyObject(copyKnownProperties, destination, ...sources);
    }

    /**
     * Somewhat excesive statements just for preventing type check errors.
     */
     private static copyArray(copyKnownProperties: boolean, destination: [] = [], ...sources: [][]): [] {
        if (!sources.length) {
            return destination;
        }
        let source: [] | undefined = sources.shift();
        if (source && ObjectUtils.isArray(destination) && ObjectUtils.isArray(source)) {
            source.forEach((item, index) => {
                if (item) {
                    if (ObjectUtils.isObject(item)) {
                        ObjectUtils.push(destination, ObjectUtils.copyObject(copyKnownProperties, {}, item));
                    } else if (ObjectUtils.isArray(item)) {
                        ObjectUtils.push(destination, ObjectUtils.copyArray(copyKnownProperties, [], item));
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
