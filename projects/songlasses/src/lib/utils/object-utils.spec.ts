import { ObjectUtils } from './object-utils';

describe('SgSidebarervice', () => {
      
    it('#equals source1 and source2 are null should return true', () => {
        expect(ObjectUtils.equals(null, null)).toEqual(true);
    });

    it('#equals source1 and source2 are undefined should return true', () => {
        expect(ObjectUtils.equals(undefined, undefined)).toEqual(true);
    });

    it('#equals source1 is null and source2 is undefined should return false', () => {
        expect(ObjectUtils.equals(null, undefined)).toEqual(false);
    });

    it('#equals source1 is undefined and source2 is null should return false', () => {
        expect(ObjectUtils.equals(undefined, null)).toEqual(false);
    });

    it('#equals source1 is object and source2 is null should return false', () => {
        expect(ObjectUtils.equals({}, null)).toEqual(false);
    });

    it('#equals source1 is object and source2 is undefined should return false', () => {
        expect(ObjectUtils.equals({}, null)).toEqual(false);
    });

    it('#equals source1 is null and source2 is object should return false', () => {
        expect(ObjectUtils.equals(null, {})).toEqual(false);
    });

    it('#equals source1 is undefined and source2 is object should return false', () => {
        expect(ObjectUtils.equals(undefined, {})).toEqual(false);
    });

    it('#equals source1 is not the same as source2 should return false', () => {
        expect(ObjectUtils.equals({"name": "value"}, {"name1": "value"})).toEqual(false);
    });

    it('#equals source1 and source2 are empty object should return true', () => {
        expect(ObjectUtils.equals({}, {})).toEqual(true);
    });

    it('#equals source1 is the same as source2 should return true', () => {
        let obj: object = {"name": "value"};
        expect(ObjectUtils.equals(obj, obj)).toEqual(true);
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
        expect(ObjectUtils.equals(obj, obj)).toEqual(true);
    });

    it('#isFunction variations should pass', () => {
        expect(ObjectUtils.isFunction(ObjectUtils.isFunction)).toEqual(true);
        expect(ObjectUtils.isFunction(function(){})).toEqual(true);
        expect(ObjectUtils.isFunction(() => {})).toEqual(true);
        expect(ObjectUtils.isFunction(class A {})).toEqual(true);
        expect(ObjectUtils.isFunction(null)).toEqual(false);
        expect(ObjectUtils.isFunction(undefined)).toEqual(false);
        expect(ObjectUtils.isFunction(new String(""))).toEqual(false);
        expect(ObjectUtils.isFunction("")).toEqual(false);
        expect(ObjectUtils.isFunction(new Number(1))).toEqual(false);
        expect(ObjectUtils.isFunction(1)).toEqual(false);
        expect(ObjectUtils.isFunction(new Date())).toEqual(false);
        expect(ObjectUtils.isFunction(new Boolean(true))).toEqual(false);
        expect(ObjectUtils.isFunction(true)).toEqual(false);
        expect(ObjectUtils.isFunction(false)).toEqual(false);
        expect(ObjectUtils.isFunction(new Array<string>())).toEqual(false);
        expect(ObjectUtils.isFunction([])).toEqual(false);
        expect(ObjectUtils.isFunction(new Object())).toEqual(false);
        expect(ObjectUtils.isFunction({})).toEqual(false);
    });

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

    it('#isArray variations should pass', () => {
        expect(ObjectUtils.isArray(ObjectUtils.isArray)).toEqual(false);
        expect(ObjectUtils.isArray(function(){})).toEqual(false);
        expect(ObjectUtils.isArray(() => {})).toEqual(false);
        expect(ObjectUtils.isArray(class A {})).toEqual(false);
        expect(ObjectUtils.isArray(null)).toEqual(false);
        expect(ObjectUtils.isArray(undefined)).toEqual(false);
        expect(ObjectUtils.isArray(new String(""))).toEqual(false);
        expect(ObjectUtils.isArray("")).toEqual(false);
        expect(ObjectUtils.isArray(new Number(1))).toEqual(false);
        expect(ObjectUtils.isArray(1)).toEqual(false);
        expect(ObjectUtils.isArray(new Date())).toEqual(false);
        expect(ObjectUtils.isArray(new Boolean(true))).toEqual(false);
        expect(ObjectUtils.isArray(true)).toEqual(false);
        expect(ObjectUtils.isArray(false)).toEqual(false);
        expect(ObjectUtils.isArray(new Array<string>())).toEqual(true);
        expect(ObjectUtils.isArray([])).toEqual(true);
        expect(ObjectUtils.isArray(new Object())).toEqual(false);
        expect(ObjectUtils.isArray({})).toEqual(false);
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

    it('#clearArray empty array should return same empty array', () => {
        let arr: string[] = [];
        let result: string[] = ObjectUtils.clearArray(arr);
        expect(result).toEqual([]);

        // assert reference is intact
        arr.push("value");
        expect(result).toEqual(arr);
    });
 
    it('#clearArray array with values should return empty array', () => {
        let arr: string[] = ["value1", "value2"];
        let expected: string[] = [];
        let result: string[] = ObjectUtils.clearArray(arr);
        expect(result).toEqual(expected);

        // assert reference is intact
        arr.push("value");
        expect(result).toEqual(arr);
    });
 
    it('#copyArray empty destination array and no source array should return empty destination array', () => {
        let destination: string[] = [];
        let expected: string[] = [];
        expect(ObjectUtils.copyArray(destination)).toEqual([]);
        expect(destination).toEqual(expected);
    });

    it('#copyArray empty destination array and source array should return destination array with source array items', () => {
        let destination: string[] = [];
        let source: string[] = ["value1"];
        let expected: string[] = ["value1"];
        expect(ObjectUtils.copyArray(destination, source)).toEqual(expected);
        expect(destination).toEqual(expected);
    });

    it('#copyArray empty destination array and two source arrays should return destination array with source array items', () => {
        let destination: string[] = [];
        let source1: string[] = ["value1", "value2"];
        let source2: string[] = ["value3", "value4"];
        let expected: string[] = ["value1", "value2", "value3", "value4"];
        expect(ObjectUtils.copyArray(destination, source1, source2)).toEqual(expected);
        expect(destination).toEqual(expected);
    });

    it('#assign destination without source(s) should not update destination and return destination', () => {
        let destination = {
            "destinationProperty1": "destinationValue1"
        };
        let expected = {
            "destinationProperty1": "destinationValue1"
        };
        let result: object = ObjectUtils.assign(destination);
        expect(result).toEqual(expected);
        expect(destination).toEqual(expected);

        // assert reference is intact
        destination.destinationProperty1 = "somevalue";
        expect(result).toEqual(destination);
    });

    it('#assign source with new property should add property to destination and return updated destination', () => {
        let destination = {
            "destinationProperty1": "destinationValue1"
        };
        let source = {
            "sourceProperty1": "sourceValue1"
        };
        let expected = {
            "destinationProperty1": "destinationValue1",
            "sourceProperty1": "sourceValue1"
        };
        expect(ObjectUtils.assign(destination, source)).toEqual(expected);
        expect(destination).toEqual(expected);
    });

    it('#assign two sources with two different properties should add two properties to destination', () => {
        let destination = {
            "destinationProperty1": "destinationValue1"
        };
        let source1 = {
            "source1Property1": "source1Value1"
        };
        let source2 = {
            "source2Property1": "source2Value1"
        };
        let expected = {
            "destinationProperty1": "destinationValue1",
            "source1Property1": "source1Value1",
            "source2Property1": "source2Value1"
        };
        ObjectUtils.assign(destination, source1, source2);
        expect(destination).toEqual(expected);
    });

    it('#assign source with same property as destination should update destination property with source property value', () => {
        let destination = {
            "property1": "destinationValue1"
        };
        let source = {
            "property1": "sourceValue1"
        };
        let expected = {
            "property1": "sourceValue1",
        };
        ObjectUtils.assign(destination, source);
        expect(destination).toEqual(expected);
    });

    it('#assign two sources with same property should update destination property with last source property value', () => {
        let destination = {
        };
        let source1 = {
            "property1": "source1Value1"
        };
        let source2 = {
            "property1": "source2Value1"
        };
        let expected = {
            "property1": "source2Value1",
        };
        ObjectUtils.assign(destination, source1, source2);
        expect(destination).toEqual(expected);
    });

    it('#assign source containing a hierachy of objects should update destination with with deep copy of source property', () => {
        let destination = {
        };
        let source = {
            "sourceProperty": {
                "level2SourceProperty1": "level2SourceValue1",
                "level2SourceProperty2": {
                    "level3SourceProperty1": "level3SourceValue1"
                }
            }
        };
        let expected = {
            "sourceProperty": {
                "level2SourceProperty1": "level2SourceValue1",
                "level2SourceProperty2": {
                    "level3SourceProperty1": "level3SourceValue1"
                }
            }
        };
        ObjectUtils.assign(destination, source);
        expect(destination).toEqual(expected);

        // assert deep copy
        let value: string = "changed value";
        source["sourceProperty"]["level2SourceProperty1"] = value;
        expect(source["sourceProperty"]["level2SourceProperty1"]).toEqual(value);
        expect(destination).toEqual(expected);
    });

    it('#assign source containing a hierachy of objects should update destination with with deep copy of source property', () => {
        let destination = {
        };
        let source = {
            "sourceProperty": [
                {
                    "item1": "item2value",
                }, {
                    "item2": "item2value"
                }
            ]
        };
        let expected = {
            "sourceProperty": [
                {
                    "item1": "item2value",
                }, {
                    "item2": "item2value"
                }
            ]
        };
        ObjectUtils.assign(destination, source);
        expect(destination).toEqual(expected);

        // assert deep copy
        let value: string = "changed value";
        source["sourceProperty"][0]["item1"] = value;
        expect(source["sourceProperty"][0]["item1"]).toEqual(value);
        expect(destination).toEqual(expected);
    });

    it('#assign source containing a hierachy of arrays should update destination with with deep copy of source property', () => {
        let destination = {
        };
        let source = {
            "sourceProperty": [
                [
                    {
                        "item1": "item2value",
                    }
                ], [
                    {
                        "item1": "item2value"
                    }
                ]
            ]
        };
        let expected = {
            "sourceProperty": [
                [
                    {
                        "item1": "item2value",
                    }
                ], [
                    {
                        "item1": "item2value"
                    }
                ]
            ]
        };
        ObjectUtils.assign(destination, source);
        expect(destination).toEqual(expected);

        //assert deep copy
        let value: string = "changed value";
        source["sourceProperty"][0][0]["item1"] = value;
        expect(source["sourceProperty"][0][0]["item1"]).toEqual(value);
        expect(destination).toEqual(expected);
    });

    it('#merge destination without source(s) should not update destination and return destination', () => {
        let destination = {
            "destinationProperty1": "destinationValue1"
        };
        let expected = {
            "destinationProperty1": "destinationValue1"
        };
        expect(ObjectUtils.merge(destination)).toEqual(expected);
        expect(destination).toEqual(expected);
    });

    it('#merge source with new property should add property to destination and return updated destination', () => {
        let destination = {
            "destinationProperty1": "destinationValue1"
        };
        let source = {
            "sourceProperty1": "sourceValue1"
        };
        let expected = {
            "destinationProperty1": "destinationValue1",
            "sourceProperty1": "sourceValue1"
        };
        expect(ObjectUtils.merge(destination, source)).toEqual(expected);
        expect(destination).toEqual(expected);
    });

    it('#merge two sources with two different properties should add two properties to destination', () => {
        let destination = {
            "destinationProperty1": "destinationValue1"
        };
        let source1 = {
            "source1Property1": "source1Value1"
        };
        let source2 = {
            "source2Property1": "source2Value1"
        };
        let expected = {
            "destinationProperty1": "destinationValue1",
            "source1Property1": "source1Value1",
            "source2Property1": "source2Value1"
        };
        ObjectUtils.merge(destination, source1, source2);
        expect(destination).toEqual(expected);
    });

    it('#merge source with same property as destination should not update destination property with source property value', () => {
        let destination = {
            "property1": "destinationValue1"
        };
        let source = {
            "property1": "sourceValue1"
        };
        let expected = {
            "property1": "destinationValue1",
        };
        ObjectUtils.merge(destination, source);
        expect(destination).toEqual(expected);
    });

    it('#merge two sources with same property should update destination property with first source property value', () => {
        let destination = {
        };
        let source1 = {
            "property1": "source1Value1"
        };
        let source2 = {
            "property1": "source2Value1"
        };
        let expected = {
            "property1": "source1Value1",
        };
        ObjectUtils.merge(destination, source1, source2);
        expect(destination).toEqual(expected);
    });

    it('#merge source containing a hierachy of objects should update destination with deep copy of source property', () => {
        let destination = {
        };
        let source = {
            "sourceProperty": {
                "level2SourceProperty1": "level2SourceValue1",
                "level2SourceProperty2": {
                    "level3SourceProperty1": "level3SourceValue1"
                }
            }
        };
        let expected = {
            "sourceProperty": {
                "level2SourceProperty1": "level2SourceValue1",
                "level2SourceProperty2": {
                    "level3SourceProperty1": "level3SourceValue1"
                }
            }
        };
        ObjectUtils.merge(destination, source);
        expect(destination).toEqual(expected);

        // assert deep copy
        let value: string = "changed value";
        source["sourceProperty"]["level2SourceProperty1"] = value;
        expect(source["sourceProperty"]["level2SourceProperty1"]).toEqual(value);
        expect(destination).toEqual(expected);
    });

    it('#merge source containing a hierachy of objects should update destination with with deep copy of source property', () => {
        let destination = {
        };
        let source = {
            "sourceProperty": [
                {
                    "item1": "item2value",
                }, {
                    "item2": "item2value"
                }
            ]
        };
        let expected = {
            "sourceProperty": [
                {
                    "item1": "item2value",
                }, {
                    "item2": "item2value"
                }
            ]
        };
        ObjectUtils.merge(destination, source);
        expect(destination).toEqual(expected);

        // assert deep copy
        let value: string = "changed value";
        source["sourceProperty"][0]["item1"] = value;
        expect(source["sourceProperty"][0]["item1"]).toEqual(value);
        expect(destination).toEqual(expected);
    });

    it('#merge source containing a hierachy of arrays should update destination with with deep copy of source property', () => {
        let destination = {
        };
        let source = {
            "sourceProperty": [
                [
                    {
                        "item1": "item2value",
                    }
                ], [
                    {
                        "item1": "item2value"
                    }
                ]
            ]
        };
        let expected = {
            "sourceProperty": [
                [
                    {
                        "item1": "item2value",
                    }
                ], [
                    {
                        "item1": "item2value"
                    }
                ]
            ]
        };
        ObjectUtils.merge(destination, source);
        expect(destination).toEqual(expected);

        //assert deep copy
        let value: string = "changed value";
        source["sourceProperty"][0][0]["item1"] = value;
        expect(source["sourceProperty"][0][0]["item1"]).toEqual(value);
        expect(destination).toEqual(expected);
    });

});
