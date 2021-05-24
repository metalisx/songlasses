import { AssertUtils } from './assert-utils';

describe('AssertUtils', () => {
      
    it('#equals source1 and source2 are null should return true', () => {
        expect(AssertUtils.equals(null, null)).toEqual(true);
    });

    it('#equals source1 and source2 are undefined should return true', () => {
        expect(AssertUtils.equals(undefined, undefined)).toEqual(true);
    });

    it('#equals source1 is null and source2 is undefined should return false', () => {
        expect(AssertUtils.equals(null, undefined)).toEqual(false);
    });

    it('#equals source1 is undefined and source2 is null should return false', () => {
        expect(AssertUtils.equals(undefined, null)).toEqual(false);
    });

    it('#equals source1 is object and source2 is null should return false', () => {
        expect(AssertUtils.equals({}, null)).toEqual(false);
    });

    it('#equals source1 is object and source2 is undefined should return false', () => {
        expect(AssertUtils.equals({}, null)).toEqual(false);
    });

    it('#equals source1 is null and source2 is object should return false', () => {
        expect(AssertUtils.equals(null, {})).toEqual(false);
    });

    it('#equals source1 is undefined and source2 is object should return false', () => {
        expect(AssertUtils.equals(undefined, {})).toEqual(false);
    });

    it('#equals source1 is not the same as source2 should return false', () => {
        expect(AssertUtils.equals({"name": "value"}, {"name1": "value"})).toEqual(false);
    });

    it('#equals source1 and source2 are empty object should return true', () => {
        expect(AssertUtils.equals({}, {})).toEqual(true);
    });

    it('#equals source1 is the same as source2 should return true', () => {
        let obj: object = {"name": "value"};
        expect(AssertUtils.equals(obj, obj)).toEqual(true);
    });

    it('#equals source1 is the same as source2 and are containing a hierachy of objects should return true', () => {
        let obj: object = {
            "name": "value",
            "childObj": {
                "childName": "valueChildName",
                "childNumber": 1,
                "childDate": new Date()
            }
        }
        expect(AssertUtils.equals(obj, obj)).toEqual(true);
    });

});
