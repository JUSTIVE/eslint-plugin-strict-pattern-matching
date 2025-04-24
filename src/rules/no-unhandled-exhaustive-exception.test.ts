import { ESLintUtils } from '@typescript-eslint/utils';
import noUnhandledExhaustiveException from './no-unhandled-exhaustive-exception';

const ruleTester = new ESLintUtils.RuleTester({
  parser: '@typescript-eslint/parser',
});

ruleTester.run('no-unhandled-exhaustive-exception', noUnhandledExhaustiveException, {
  invalid: [
    {
      code: `match(asdf)
    .with(true, ()=>{})
    .exhaustive()`,
      errors: [{ messageId: 'noUnhandledExhaustiveException' }],
    },
  ],
  valid: [
    {
      code: `match(asdf).with(true, ()=>{}).exhaustive(()=>{})`,
    },
  ],
});
