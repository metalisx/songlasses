import { ObjectUtils } from './object-utils';

describe('SgSidebarervice', () => {
      
    it('#assign destination without source(s) should not update destination and return destination', () => {
        let destination = {
            "destinationProperty1": "destinationValue1"
        };
        let expected = {
            "destinationProperty1": "destinationValue1"
        };
        expect(ObjectUtils.assign(destination)).toEqual(expected);
        expect(destination).toEqual(expected);
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

    it('#assign source containing a hierachy of objects should update destination with source property', () => {
        let destination = {
        };
        let source = {
            "sourceProperty1": {
                "level2SourceProperty1": "level2SourceValue1",
                "level2SourceProperty2": {
                    "level3SourceProperty1": "level3SourceValue1"
                }
            }
        };
        let expected = {
            "sourceProperty1": {
                "level2SourceProperty1": "level2SourceValue1",
                "level2SourceProperty2": {
                    "level3SourceProperty1": "level3SourceValue1"
                }
            }
        };
        ObjectUtils.assign(destination, source);
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

    it('#merge source containing a hierachy of objects should update destination with source property', () => {
        let destination = {
        };
        let source = {
            "sourceProperty1": {
                "level2SourceProperty1": "level2SourceValue1",
                "level2SourceProperty2": {
                    "level3SourceProperty1": "level3SourceValue1"
                }
            }
        };
        let expected = {
            "sourceProperty1": {
                "level2SourceProperty1": "level2SourceValue1",
                "level2SourceProperty2": {
                    "level3SourceProperty1": "level3SourceValue1"
                }
            }
        };
        ObjectUtils.merge(destination, source);
        expect(destination).toEqual(expected);
    });

});
