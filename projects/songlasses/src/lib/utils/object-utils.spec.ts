import { ObjectUtils } from './object-utils';

describe('ObjectUtils', () => {
      
    it('#isObject variations should pass', () => {
        expect(ObjectUtils.isObject(ObjectUtils.isObject)).toEqual(false);
        expect(ObjectUtils.isObject(function(){})).toEqual(false);
        expect(ObjectUtils.isObject(() => {})).toEqual(false);
        expect(ObjectUtils.isObject(class A {})).toEqual(false);
        expect(ObjectUtils.isObject(null)).toEqual(false);
        expect(ObjectUtils.isObject(undefined)).toEqual(false);
        expect(ObjectUtils.isObject(new String(""))).toEqual(true);
        expect(ObjectUtils.isObject("")).toEqual(false);
        expect(ObjectUtils.isObject(new Number(1))).toEqual(true);
        expect(ObjectUtils.isObject(1)).toEqual(false);
        expect(ObjectUtils.isObject(new Date())).toEqual(true);
        expect(ObjectUtils.isObject(new Boolean(true))).toEqual(true);
        expect(ObjectUtils.isObject(true)).toEqual(false);
        expect(ObjectUtils.isObject(false)).toEqual(false);
        expect(ObjectUtils.isObject(new Array<string>())).toEqual(false);
        expect(ObjectUtils.isObject([])).toEqual(false);
        expect(ObjectUtils.isObject(new Object())).toEqual(true);
        expect(ObjectUtils.isObject({})).toEqual(true);
    });

    it('#getKeys null should return empty array', () => {
        expect(ObjectUtils.getKeys(null)).toEqual([]);
    });

    it('#getKeys undefined should return empty array', () => {
        expect(ObjectUtils.getKeys(undefined)).toEqual([]);
    });

    it('#getKeys empty object should return empty array', () => {
        expect(ObjectUtils.getKeys({})).toEqual([]);
    });

    it('#getKeys object with one property should return array with one elmeent', () => {
        expect(ObjectUtils.getKeys({"name": "value"})).toEqual(["name"]);
    });

    it('#getKeys object with 2 properties should return array with two elmeents', () => {
        expect(ObjectUtils.getKeys({"name1": "value1", "name2": "value2"})).toEqual(["name1", "name2"]);
    });

});
