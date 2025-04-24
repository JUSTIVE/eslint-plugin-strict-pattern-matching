import { ESLintUtils } from '@typescript-eslint/utils';
import { AST_NODE_TYPES } from '@typescript-eslint/utils';
import { match } from 'ts-pattern';

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://https://github.com/JUSTIVE/strict-pattern-matching#${name}`,
);

const ignore = () => {};

type MessageIds = 'noUnhandledExhaustiveException';

type Options = [];

const noUnhandledExhaustiveException = createRule<Options, MessageIds>({
  create(context) {
    return {
      CallExpression: (node) => {
        match(node)
          .with(
            {
              callee: {
                type: AST_NODE_TYPES.MemberExpression,
                property: {
                  type: AST_NODE_TYPES.Identifier,
                  name: 'exhaustive',
                },
              },
              arguments: [],
            },
            () => {
              context.report({
                node,
                messageId: 'noUnhandledExhaustiveException',
              });
            },
          )
          .otherwise(ignore);
      },
    };
  },
  name: 'no-unhandled-exhaustive-exception',
  meta: {
    type: 'suggestion',
    messages: {
      noUnhandledExhaustiveException:
        'exhaustive()를 사용할 때에는 런타임에 발생할 수 있는 예외를 명시적으로 다루어야 합니다.',
    },
    schema: [],
    docs: {
      description: "no unhandled exhaustive's exception in pattern matching",
      recommended: 'error',
    },
  },
  defaultOptions: [],
});

export default noUnhandledExhaustiveException;
