<h3 align="center">
  [Shared ESLint config](http://eslint.org/docs/developer-guide/shareable-configs) for JavaScript code.
</h3>
<div align="center">
  [![version](https://img.shields.io/npm/v/eslint-config-as-base.svg?style=flat)](https://www.npmjs.com/package/eslint-config-as-base)
</div>

# eslint-config-as-base
Used within repos as a common ESLint config. If project's need to override a configuration value, do it in the project's own `.eslintrc`.

### Usage
#### eslint-config-as-base
The default export contains all ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.


```sh
npm install --save-dev eslint-config-as-base
or
yarn add eslint-config-as-base --dev
```

Then, extend `as-base` in your `.eslintrc`:

```json
{
  "extends": "as-base"
}
```

### A note on dependencies
*eslint-config-as-base* has *eslint-plugin-import* and *eslint* as peer dependencies.
