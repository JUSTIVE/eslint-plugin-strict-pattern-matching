# eslint-plugin-strict-pattern-matching

prevent using non-exhaustive pattern matching in typescript

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-strict-pattern-matching`:

```sh
npm eslint-plugin-strict-pattern-matching --save-dev
```

## Usage

Add `strict-pattern-matching` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "strict-pattern-matching"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "strict-pattern-matching/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


