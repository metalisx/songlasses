import { FunctionUtils } from './function-utils';

describe('FunctionUtils', () => {
      
    it('#isFunction variations should pass', () => {
        expect(FunctionUtils.isFunction(FunctionUtils.isFunction)).toEqual(true);
        expect(FunctionUtils.isFunction(function(){})).toEqual(true);
        expect(FunctionUtils.isFunction(() => {})).toEqual(true);
        expect(FunctionUtils.isFunction(class A {})).toEqual(true);
        expect(FunctionUtils.isFunction(null)).toEqual(false);
        expect(FunctionUtils.isFunction(undefined)).toEqual(false);
        expect(FunctionUtils.isFunction(new String(""))).toEqual(false);
        expect(FunctionUtils.isFunction("")).toEqual(false);
        expect(FunctionUtils.isFunction(new Number(1))).toEqual(false);
        expect(FunctionUtils.isFunction(1)).toEqual(false);
        expect(FunctionUtils.isFunction(new Date())).toEqual(false);
        expect(FunctionUtils.isFunction(new Boolean(true))).toEqual(false);
        expect(FunctionUtils.isFunction(true)).toEqual(false);
        expect(FunctionUtils.isFunction(false)).toEqual(false);
        expect(FunctionUtils.isFunction(new Array<string>())).toEqual(false);
        expect(FunctionUtils.isFunction([])).toEqual(false);
        expect(FunctionUtils.isFunction(new Object())).toEqual(false);
        expect(FunctionUtils.isFunction({})).toEqual(false);
    });


});
