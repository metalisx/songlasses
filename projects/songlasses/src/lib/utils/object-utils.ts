export class ObjectUtils {

    /**
     * Returns true if two source objects are the same.
     *
     * The source objects are stringified with JSON and then compared.
     */
    static equals(source1: any, source2: any): boolean {
        return JSON.stringify(source1) === JSON.stringify(source2);
    }

    static isFunction(object: any) {
        return (object && typeof object === 'function');
    }

    static isObject(object: any) {
        return (object && typeof object === 'object' && !Array.isArray(object));
    }

    static isArray(object: any) {
        return (object && typeof object === 'object' && Array.isArray(object));
    }

    static getKeys<T>(obj: T): Array<keyof T> {
        return Object.keys(obj) as Array<keyof T>;
    }
    
    /**
     * Copy properties from sources to destination.
     * When different objects have the same property, the value of the property in the last source is set in the destination.
     * 
     * @param destination
     * @param sources
     */
    static assign(destination: object, ...sources: object[]): object {
        return ObjectUtils.copy(true, destination, ...sources);
    }

    /**
     * Merge only properties in sources which are not present in destination to destination.
     * When different objects have the same property, the value of the first found property is set in the destination.
     * 
     * @param destination
     * @param sources
     */
     static merge(destination: object, ...sources: object[]): object {
        return ObjectUtils.copy(false, destination, ...sources);
    }

    /** TODO : array copy */
    private static copy(copyKnownProperties: boolean, destination: object = {}, ...sources: object[]): object {
        if (!sources.length) {
            return destination;
        }
        let source = sources.shift();
        if (ObjectUtils.isObject(destination) && ObjectUtils.isObject(source)) {
            ObjectUtils.getKeys(source).forEach(key => {
                if (source && (copyKnownProperties || (!copyKnownProperties && !destination[key]))) {
                    if (ObjectUtils.isObject(source[key])) {
                        // if (!destination[key]) {
                        //     destination[key] = {};
                        // }
                        //ObjectUtils.merge(destination[key], source[key]);
                        // Somewhat excesive just for preventing type check errors
                        Object.assign(destination, { [key]: ObjectUtils.copy(copyKnownProperties, {}, source[key]) });
                    } else {
                        Object.assign(destination, { [key]: source[key] });
                    }
                }
            });
        }
        return ObjectUtils.copy(copyKnownProperties, destination, ...sources);
    }

}
