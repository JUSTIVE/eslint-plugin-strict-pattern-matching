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
        "strict-pattern-matching/strictPatternMatching": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->

🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                                                           | Description                                             | 🔧 |
| :----------------------------------------------------------------------------- | :------------------------------------------------------ | :- |
| [noUnhandledExhaustiveException](docs/rules/noUnhandledExhaustiveException.md) | no unhandled exhaustive's exception in pattern matching |    |
| [strictPatternMatching](docs/rules/strictPatternMatching.md)                   | no unexhaustive pattern matching                        | 🔧 |

<!-- end auto-generated rules list -->


