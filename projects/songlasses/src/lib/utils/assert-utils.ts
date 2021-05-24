export class AssertUtils {

    /**
     * Returns true if two source objects are the same.
     *
     * The source objects are stringified with JSON and then compared.
     */
    static equals<T, U>(source1: T, source2: U): boolean {
        return JSON.stringify(source1) === JSON.stringify(source2);
    }

}
