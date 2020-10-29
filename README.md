# Bags
WIP - The Bags have simple methods to manager localStorage API + JSON API

<p align="center">
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="licenses - MIT"></a>
</p>

# Todo

- [ ] create a documentation
- [ ] create a logo

#### CI/CD to check code and deploy

- [ ] github actions

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

const store = new Bags();
```

### CommonJS

```js
const Bags = require('bags');

const store = new Bags();
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

Type.is('object', {});

or

Type.is('object')({});
```

## Methods

> Follow the methods that the library provides.

### Type.is(type, value)

> Verify if value is equal type of the first argument

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`type`   |*string* | 'inform a type name'|
|`value`   |*any* | 'any value'|

**Example**

```js
Type.is('object', {}); // true
Type.is('string', {}); // false
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
