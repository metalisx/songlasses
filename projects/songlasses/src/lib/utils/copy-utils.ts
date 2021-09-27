import { ArrayUtils } from "./array-utils";
import { ObjectUtils } from "./object-utils";

export class CopyUtils {

    /**
     * Copy items from sources to destination.
     * 
     * @param destination
     * @param sources
     */
     static copyArray(destination: any[], ...sources: any[][]): any[] {
        return CopyUtils.internalCopyArray(true, destination, ...sources);
    }

    /**
     * Copy properties from the source object(s) to the destination object.
     * Override existing properties with properties from subsequent parameters.
     * 
     * @param destination
     * @param sources
     */
    static assign(destination: object, ...sources: object[]): object {
        return CopyUtils.internalCopyObject(true, destination, ...sources);
    }

    /**
     * Merge properties from the source object(s) which are not present in the destination object to the destination object.
     * Does not override existing properties with properties from subsequent parameters.
     * 
     * @param destination
     * @param sources
     */
     static merge(destination: object, ...sources: object[]): object {
        return CopyUtils.internalCopyObject(false, destination, ...sources);
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
                if (source && (override || key in destination === false)) {
                    if (ObjectUtils.isObject(source[key])) {
                        Object.assign(destination, { [key]: CopyUtils.internalCopyObject(override, {}, source[key] as object) });
                    } else if (ArrayUtils.isArray(source[key])) {
                        Object.assign(destination, { [key]: CopyUtils.internalCopyArray(override, [], source[key] as Array<any>) });
                    } else {
                        Object.assign(destination, { [key]: source[key] });
                    }
                }
            });
        }
        return CopyUtils.internalCopyObject(override, destination, ...sources);
    }

    /**
     * Somewhat excesive statements just for preventing type check errors.
     */
     private static internalCopyArray(override: boolean, destination: any[] = [], ...sources: any[][]): any[] {
        if (!sources.length) {
            return destination;
        }
        let source: any[] | undefined = sources.shift();
        if (source !== undefined && ArrayUtils.isArray(destination) && ArrayUtils.isArray(source)) {
            source.forEach((item) => {
                if (item) {
                    if (ObjectUtils.isObject(item)) {
                        CopyUtils.push(destination, CopyUtils.internalCopyObject(override, {}, item as object));
                    } else if (ArrayUtils.isArray(item)) {
                        CopyUtils.push(destination, CopyUtils.internalCopyArray(override, [], item as Array<any>));
                    } else {
                        destination[destination.length] = item;
                    }
                }
            });
        }
        return CopyUtils.internalCopyArray(override, destination, ...sources);;
    }

    private static push<T>(destination: T[], item: T): T[] {
        destination.push(item);
        return destination;
    }

}
