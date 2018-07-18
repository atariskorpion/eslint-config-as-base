<h3 align="center">
  <a href="http://eslint.org/docs/developer-guide/shareable-configs">Shared ESLint config</a> for JavaScript code.
</h3>
<p align="center">
  <a href="https://www.npmjs.com/package/eslint-config-as-base"><img alt="NPM version" src="https://img.shields.io/npm/v/eslint-config-as-base.svg?style=flat"></a> <a href="https://travis-ci.org/lerna/lerna"><img alt="Travis Status" src="https://travis-ci.org/atariskorpion/eslint-config-as-base.svg?branch=master&style=flat"></a>
</p>

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
