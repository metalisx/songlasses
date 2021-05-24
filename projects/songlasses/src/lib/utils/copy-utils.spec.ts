import { CopyUtils } from './copy-utils';

describe('CopyUtils', () => {

    it('#copyArray empty destination array and no source array should return empty destination array', () => {
        let destination: string[] = [];
        let expected: string[] = [];
        expect(CopyUtils.copyArray(destination)).toEqual([]);
        expect(destination).toEqual(expected);
    });

    it('#copyArray empty destination array and source array should return destination array with source array items', () => {
        let destination: string[] = [];
        let source: string[] = ["value1"];
        let expected: string[] = ["value1"];
        expect(CopyUtils.copyArray(destination, source)).toEqual(expected);
        expect(destination).toEqual(expected);
    });

    it('#copyArray empty destination array and two source arrays should return destination array with source array items', () => {
        let destination: string[] = [];
        let source1: string[] = ["value1", "value2"];
        let source2: string[] = ["value3", "value4"];
        let expected: string[] = ["value1", "value2", "value3", "value4"];
        expect(CopyUtils.copyArray(destination, source1, source2)).toEqual(expected);
        expect(destination).toEqual(expected);
    });

    it('#assign destination without source(s) should not update destination and return destination', () => {
        let destination = {
            "destinationProperty1": "destinationValue1"
        };
        let expected = {
            "destinationProperty1": "destinationValue1"
        };
        let result: object = CopyUtils.assign(destination);
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
        expect(CopyUtils.assign(destination, source)).toEqual(expected);
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
        CopyUtils.assign(destination, source1, source2);
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
        CopyUtils.assign(destination, source);
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
        CopyUtils.assign(destination, source1, source2);
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
        CopyUtils.assign(destination, source);
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
        CopyUtils.assign(destination, source);
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
        CopyUtils.assign(destination, source);
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
        expect(CopyUtils.merge(destination)).toEqual(expected);
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
        expect(CopyUtils.merge(destination, source)).toEqual(expected);
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
        CopyUtils.merge(destination, source1, source2);
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
        CopyUtils.merge(destination, source);
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
        CopyUtils.merge(destination, source1, source2);
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
        CopyUtils.merge(destination, source);
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
        CopyUtils.merge(destination, source);
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
        CopyUtils.merge(destination, source);
        expect(destination).toEqual(expected);

        //assert deep copy
        let value: string = "changed value";
        source["sourceProperty"][0][0]["item1"] = value;
        expect(source["sourceProperty"][0][0]["item1"]).toEqual(value);
        expect(destination).toEqual(expected);
    });

});
