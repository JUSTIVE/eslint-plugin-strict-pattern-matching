import { ESLintUtils } from '@typescript-eslint/utils';
import { AST_NODE_TYPES } from '@typescript-eslint/utils';
import { match } from 'ts-pattern';

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://https://github.com/JUSTIVE/strict-pattern-matching#${name}`,
);

const ignore = () => {};

type MessageIds = 'noRunEndingPatternMatching' | 'noUnFinishedPatternMatching';

type Options = [];

const strictPatternMatching = createRule<Options, MessageIds>({
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
                  name: 'run',
                },
              },
            },
            () => {
              function findParent(expr: any): boolean {
                if (expr.type === AST_NODE_TYPES.MemberExpression) {
                  return findParent(expr.object);
                } else if (expr.type === AST_NODE_TYPES.CallExpression) {
                  return expr.callee.type === AST_NODE_TYPES.Identifier
                    ? expr.callee.name === 'match'
                    : findParent(expr.callee);
                } else {
                  return false;
                }
              }
              if (findParent(node)) {
                context.report({
                  node,
                  messageId: 'noRunEndingPatternMatching',
                });
              }
            },
          )
          .with(
            {
              arguments: [
                {
                  type: AST_NODE_TYPES.CallExpression,
                  callee: {
                    type: AST_NODE_TYPES.MemberExpression,
                    property: {
                      type: AST_NODE_TYPES.Identifier,
                      name: 'with',
                    },
                  },
                },
              ],
            },
            () => {
              context.report({
                node,
                messageId: 'noUnFinishedPatternMatching',
              });
            },
          )
          .otherwise(ignore);
      },
      ExpressionStatement: (node) => {
        match(node)
          .with(
            {
              expression: {
                type: AST_NODE_TYPES.CallExpression,
                callee: {
                  type: AST_NODE_TYPES.MemberExpression,
                  property: {
                    type: AST_NODE_TYPES.Identifier,
                    name: 'with',
                  },
                },
              },
            },
            () => {
              context.report({
                node,
                messageId: 'noUnFinishedPatternMatching',
              });
            },
          )
          .otherwise(ignore);
      },
      VariableDeclarator: (node) => {
        match(node)
          .with(
            {
              init: {
                type: AST_NODE_TYPES.CallExpression,
                callee: {
                  type: AST_NODE_TYPES.MemberExpression,
                  property: {
                    type: AST_NODE_TYPES.Identifier,
                    name: 'with',
                  },
                },
              },
            },
            () => {
              context.report({
                node,
                messageId: 'noUnFinishedPatternMatching',
              });
            },
          )
          .otherwise(ignore);
      },
    };
  },
  name: 'strict-pattern-matching',
  meta: {
    type: 'suggestion',
    messages: {
      noRunEndingPatternMatching:
        '패턴 매칭은 run으로 끝나지 않아야 합니다. exhastive(), otherwise()를 사용해주세요',
      noUnFinishedPatternMatching:
        '패턴 매칭은 끝나지 않은 상태로 두면 안됩니다. exhastive(), otherwise()를 사용해주세요',
    },
    fixable: 'code',
    schema: [],
    docs: {
      description: 'no unexhaustive pattern matching',

      recommended: 'error',
    },
  },
  defaultOptions: [],
});

export default strictPatternMatching;
