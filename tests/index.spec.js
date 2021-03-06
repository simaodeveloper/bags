import Bags from '../src/index.js'

describe('Bags', () => {
  describe('Smoke Tests', () => {
    let store

    beforeEach(() => {
      store = Bags.create()
    })

    test('it should have Bags Class defined', () => {
      expect(Bags).toBeDefined()
    })

    test('it should have a static [create] method', () => {
      expect(Bags.create).toBeDefined()
    })

    test('it should have an instance [add] method', () => {
      expect(store.add).toBeDefined()
    })

    test('it should have an instance [remove] method', () => {
      expect(store.remove).toBeDefined()
    })

    test('it should have an instance [has] method', () => {
      expect(store.has).toBeDefined()
    })

    test('it should have an instance [clear] method', () => {
      expect(store.clear).toBeDefined()
    })

    test('it should have an instance [fetch] method', () => {
      expect(store.fetch).toBeDefined()
    })
  })

  describe('Behavior Tests', () => {
    let store
    const stringValue = 'Bags'
    const numberValue = 42
    const booleanValue = false
    const arrayValue = ['Bags', 42, false]
    const objectValue = { name: 'Bags', age: 42, isHuman: false }
    const functionValue = () => {}

    beforeEach(() => {
      store = Bags.create()

      store.add('string', stringValue)
      store.add('number', numberValue)
      store.add('boolean', booleanValue)
      store.add('array', arrayValue)
      store.add('object', objectValue)
    })

    test('it should create an instance', () => {
      expect(store instanceof Bags).toBeTruthy()
    })

    test('it should add a value at store related to a given key', () => {
      expect(store.has('string')).toBeTruthy()
      expect(store.has('number')).toBeTruthy()
      expect(store.has('boolean')).toBeTruthy()
      expect(store.has('array')).toBeTruthy()
      expect(store.has('object')).toBeTruthy()
    })

    test('it should not add a function as a value and throw an error', () => {
      expect(() => store.add('function', functionValue)).toThrow('The function value is invalid!')
    })

    test('it should fetch a resource from store given a key', () => {
      expect(store.fetch('string')).toEqual(stringValue)
      expect(store.fetch('number')).toEqual(numberValue)
      expect(store.fetch('boolean')).toEqual(booleanValue)
      expect(store.fetch('array')).toEqual(arrayValue)
      expect(store.fetch('object')).toEqual(objectValue)
    })

    test('it should clear all the store', () => {
      store.clear()
      expect(store.has('string')).toBeFalsy()
      expect(store.has('number')).toBeFalsy()
      expect(store.has('boolean')).toBeFalsy()
      expect(store.has('array')).toBeFalsy()
      expect(store.has('object')).toBeFalsy()
    })

    test('it should remove only one entry given a key', () => {
      expect(store.has('boolean')).toBeTruthy()
      store.remove('boolean')
      expect(store.has('string')).toBeTruthy()
      expect(store.has('number')).toBeTruthy()
      expect(store.has('boolean')).toBeFalsy()
      expect(store.has('array')).toBeTruthy()
      expect(store.has('object')).toBeTruthy()
    })
  })

  describe('Resources Tests', () => {
    let storage

    beforeEach(() => {
      storage = window.localStorage
      delete window.localStorage
    })

    test('it should throw an error when localStorage is unavailable', () => {
      expect(() => Bags.create()).toThrow('The environment don\'t have a localStorage API!')
    })

    afterEach(() => {
      window.localStorage = storage
    })
  })
})
