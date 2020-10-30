# Bags
WIP - The Bags have simple methods to manager localStorage API + JSON API

<p align="center">
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="licenses - MIT"></a>
</p>

# Documentation

## Browser Support


![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
4+ ✔ | 3.5+ ✔ | 10,50+ ✔ | 4+ ✔ | 8+ ✔ |

## Installation

```sh
$ npm install bags --save
```

## How to use

### ES6

```js
import Bags from 'bags';

const store = Bags.create();
```

### CommonJS

```js
const Bags = require('bags');

const store = Bags.create();
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="bags.umd.js"></script>

<!-- to import minified version -->
<script src="bags.umd.min.js"></script>
```

After that the library will be available as `bags`. Follow an example:

```js

const bag = Bags.create();
```

## Methods

Follow the methods that the library provides.

### Bags.create()

Create is a static method that create a storage instance

**Arguments**

Don't have arguments

**Example**

```js
const bag = Bags.create();
```

### bag.add(key, value)

Create a new entry with any value (unless the function value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`key`   |*string* | 'Any string you want as a key'|
|`value`   |*any* | 'any value'|

**Example**

```js
bag.add('object', {});
bag.add('array', []);
```

### bag.fetch(key)

Fetch a value stored given a correspondent key
> Return null if key not exists

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`key`   |*string* | 'Any string you want as a key'|

**Example**

```js
bag.fetch('object'); // {}
bag.fetch('array'); // []
```

### bag.has(key)

Verify if value related with given key exists
> Return a boolean true | false

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`key`   |*string* | 'Any string you want as a key'|

**Example**

```js
bag.has('object'); // true
bag.has('number'); // false
```
### bag.remove(key)

Remove the given key and the related value
> Return true if occurs correctly

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`key`   |*string* | 'Any string you want as a key'|

**Example**

```js
bag.has('object'); // true
bag.remove('object');
bag.has('object'); // false
```

### bag.clear()

Clear all the store instance
> Return true if occurs correctly

**Arguments**

Don't have arguments

**Example**

```js
bag.has('object'); // true
bag.remove('object');
bag.has('object'); // false
```

# Maintainers

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars2.githubusercontent.com/u/4645658?s=460&u=72ded9dd7cf1d6bfae41ed541fc349ca76d42d95&v=4">
        </br>
        <a href="https://github.com/simaodeveloper">Daniel Simão</a>
      </td>
    </tr>
  <tbody>
</table>

# Contributors

This project exists thanks to all the people who contribute.

You're free to contribute to this project by submitting [issues](https://github.com/multipages/multipages/issues) and/or [pull requests](https://github.com/multipages/multipages/pulls). This project is test-driven, so keep in mind that every change and new feature should be covered by tests.

This repository uses [standard style guide](https://github.com/standard/standard)

# License

MIT © Daniel Simão da Silva
