import strictPatternMatching from './strict-pattern-matching'
import { ESLintUtils } from '@typescript-eslint/utils'

const ruleTester = new ESLintUtils.RuleTester({
  parser: '@typescript-eslint/parser'
})

ruleTester.run('strict-pattern-matching', strictPatternMatching, {
  valid: [],
  invalid: [
    {
      code: `match(asdf)
    .with(true, ()=>{})`,
      errors: [{ messageId: 'noUnFinishedPatternMatching'  }] ,
    },
    {
      code: `match(asdf)
    .with(true, ()=>{})
    .with(false, ()=>{})`,
      errors: [{ messageId: 'noUnFinishedPatternMatching'  }] ,
    },
    {
      code: 'match(asdf).with(false, ()=>{}).with(true, ()=>{})',
      errors: [{ messageId: 'noUnFinishedPatternMatching' }],
    },
    {
      code:
`const x = Math.random() > 0.5
const y = match(x)
.with(true, () => 3)
.with(false, () => 4)

console.log(y)`,
      errors: [{ messageId: 'noUnFinishedPatternMatching' }],
    },
    {
      code:`fun(match(x)
      .with(true,()=>{})
      .with(false,()=>{})
    )`,
      errors: [{ messageId: 'noUnFinishedPatternMatching' }],
    },
    {
      code: 'match(asdf).with(false, ()=>{}).run()',
      errors: [{ messageId: 'noRunEndingPatternMatching' }]
    },
    {
      code: 'let x = match(asdf).with(false, ()=>{}).run()',
      errors: [{ messageId: 'noRunEndingPatternMatching' }]
    },
  ]
})
