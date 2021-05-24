import { ArrayUtils } from './array-utils';

describe('ArrayUtils', () => {
      
    it('#isArray variations should pass', () => {
        expect(ArrayUtils.isArray(ArrayUtils.isArray)).toEqual(false);
        expect(ArrayUtils.isArray(function(){})).toEqual(false);
        expect(ArrayUtils.isArray(() => {})).toEqual(false);
        expect(ArrayUtils.isArray(class A {})).toEqual(false);
        expect(ArrayUtils.isArray(null)).toEqual(false);
        expect(ArrayUtils.isArray(undefined)).toEqual(false);
        expect(ArrayUtils.isArray(new String(""))).toEqual(false);
        expect(ArrayUtils.isArray("")).toEqual(false);
        expect(ArrayUtils.isArray(new Number(1))).toEqual(false);
        expect(ArrayUtils.isArray(1)).toEqual(false);
        expect(ArrayUtils.isArray(new Date())).toEqual(false);
        expect(ArrayUtils.isArray(new Boolean(true))).toEqual(false);
        expect(ArrayUtils.isArray(true)).toEqual(false);
        expect(ArrayUtils.isArray(false)).toEqual(false);
        expect(ArrayUtils.isArray(new Array<string>())).toEqual(true);
        expect(ArrayUtils.isArray([])).toEqual(true);
        expect(ArrayUtils.isArray(new Object())).toEqual(false);
        expect(ArrayUtils.isArray({})).toEqual(false);
    });

    it('#clearArray empty array should return same empty array', () => {
        let arr: string[] = [];
        let result: string[] = ArrayUtils.clear(arr);
        expect(result).toEqual([]);

        // assert reference is intact
        arr.push("value");
        expect(result).toEqual(arr);
    });
 
    it('#clearArray array with values should return empty array', () => {
        let arr: string[] = ["value1", "value2"];
        let expected: string[] = [];
        let result: string[] = ArrayUtils.clear(arr);
        expect(result).toEqual(expected);

        // assert reference is intact
        arr.push("value");
        expect(result).toEqual(arr);
    });

});
