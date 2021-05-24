export class ArrayUtils {

    static isArray<T>(object: T) {
        return (object !== undefined && object !== null && typeof object === 'object' && Array.isArray(object));
    }

    /**
     * Remove first element from the array where the predicate is true.
     * @param arr
     * @param predicate 
     * @returns 
     */
     static remove<T>(arr: Array<T>, predicate: (value: T, index: number, obj: T[]) => unknown): Array<T> { 
        let index: number = arr.findIndex(predicate);
        if (index > -1) {
          arr.splice(index, 1);
        }
        return arr;
    }

    /**
     * Removing all items from the array. Use this method to keep references to the array alive.
     * 
     * @param items 
     * @returns 
     */
     static clear<T>(items: T[]) {
        items.splice(0, items.length);
        return items;
    }


}
