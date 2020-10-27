import EasyStorage from '../src/EasyStorage.js';

describe('EasyStorage', () => {

    describe('Smoke Tests', () => {
        let store;
    
        beforeEach(() => {
            store = new EasyStorage();
        });
    
        test('it should be defined', () => {
            expect(EasyStorage).toBeDefined();
        });
    
        test('it should create an instance', () => {
            expect(store instanceof EasyStorage).toBeTruthy();
        })
    
        test('it should have a [add] method', () => {
            expect(store.add).toBeDefined();
        });
        
        test('it should have a [remove] method', () => {
            expect(store.remove).toBeDefined();
        });
        
        test('it should have a [has] method', () => {
            expect(store.has).toBeDefined();
        });
        
        test('it should have a [clear] method', () => {
            expect(store.clear).toBeDefined();
        });
        
        test('it should have a [fetch] method', () => {
            expect(store.fetch).toBeDefined();
        });
    });

    describe('Behavior Tests', () => {
        let store;
        let stringValue = 'EasyStorage';
        let numberValue = 42;
        let booleanValue = false;
        let arrayValue = ['EasyStorage', 42, false];
        let objectValue = { name: 'EasyStorage', age: 42, isHuman: false };
        let functionValue = () => {};
    
        beforeEach(() => {
            store = new EasyStorage();

            store.add('string', stringValue);
            store.add('number', numberValue);
            store.add('boolean', booleanValue);
            store.add('array', arrayValue);
            store.add('object', objectValue);
        });

        test('it should add a value at store related to a key', () => {
            expect(store.has('string')).toBeTruthy();
            expect(store.has('number')).toBeTruthy();
            expect(store.has('boolean')).toBeTruthy();
            expect(store.has('array')).toBeTruthy();
            expect(store.has('object')).toBeTruthy();
        });

        test('it should not add a function as a value and throw a error', () => {
            expect(() => store.add('function', functionValue)).toThrow('The function value is invalid!');
        });

        test('it should fetch a resource from store given a key', () => {
            expect(store.fetch('string')).toEqual(stringValue);
            expect(store.fetch('number')).toEqual(numberValue);
            expect(store.fetch('boolean')).toEqual(booleanValue);
            expect(store.fetch('array')).toEqual(arrayValue);
            expect(store.fetch('object')).toEqual(objectValue);
        });

        test('it should clear all the store', () => {
            store.clear();
            expect(store.has('string')).toBeFalsy();
            expect(store.has('number')).toBeFalsy();
            expect(store.has('boolean')).toBeFalsy();
            expect(store.has('array')).toBeFalsy();
            expect(store.has('object')).toBeFalsy();
        });

        test('it should clear only one entry given a key', () => {
            expect(store.has('boolean')).toBeTruthy();
            store.clear('boolean');
            expect(store.has('boolean')).toBeFalsy();
        });

        test('it should remove only one entry given a key', () => {
            expect(store.has('boolean')).toBeTruthy();
            store.remove('boolean');
            expect(store.has('boolean')).toBeFalsy();
        });
    });

    describe('Resources Tests', () => {
        let storage;

        beforeEach(() => {
            storage = window.localStorage;
            delete window.localStorage;
        })

        test('it should throw a error when localStorage is unavailable', () => {
            expect(() => new EasyStorage()).toThrow('The environment don\'t have a localStorage API!');
        });

        afterEach(() => {
            window.localStorage = storage;
        })
    });
})