# eslint-config-as-base

[Shared ESLint config](http://eslint.org/docs/developer-guide/shareable-configs) for JavaScript code. Used within repos as a common ESLint config.

If a project's needs to override a configuration value, do it in the project's own `.eslintrc`.

## Usage

### eslint-config-as-base

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

## A note on dependencies
*eslint-config-as-base* has *eslint-plugin-import* and *eslint* as peer dependencies.
