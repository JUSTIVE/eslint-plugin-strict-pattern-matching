import{ESLintUtils as y}from"@typescript-eslint/utils";import{AST_NODE_TYPES as e}from"@typescript-eslint/utils";import{P as o,match as t}from"ts-pattern";var u=y.RuleCreator(r=>`https://example.com/rule/${r}`),n=()=>{},w=u({create(r){return{MemberExpression:function(a){t(a).with({property:{type:e.Identifier,name:"exhaustive"}},s=>{t(s).with({object:{type:e.CallExpression,arguments:o.select("secondArgument"),callee:{property:{name:"with"},type:e.MemberExpression,object:{arguments:o.select("firstArgument"),type:e.CallExpression,callee:{property:{name:"with"},type:e.MemberExpression,object:{callee:{name:"match"}}}}}}},({firstArgument:i,secondArgument:l})=>{let[c]=l,[m]=i;t([m,c]).with([{type:e.Literal},{type:e.Literal}],([h,g])=>{t([h.raw,g.raw]).with(o.union(["true","false"],["false","true"]),()=>{r.report({node:a,messageId:"noFullyBooleanPatternMatching"})}).otherwise(n)})}).otherwise(n)}).otherwise(n),t(a).with({property:{type:e.Identifier,name:"otherwise"}},s=>{t(s).with({object:{type:e.CallExpression,arguments:o.select("firstArgument"),callee:{property:{name:"with"},type:e.MemberExpression,object:{callee:{name:"match"}}}}},({firstArgument:i})=>{let[l]=i;t(l).with({type:e.Literal,raw:o.union("true","false")},()=>{r.report({node:a,messageId:"noPartiallyBooleanPatternMatching"})})}).otherwise(n)}).otherwise(n)}}},name:"no-boolean-pattern-matching",meta:{type:"suggestion",messages:{noFullyBooleanPatternMatching:"\uBD88\uB9AC\uC5B8 \uAC12\uC5D0 \uB300\uD55C \uD328\uD134 \uB9E4\uCE6D\uC740 \uAD8C\uC7A5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC0BC\uD56D\uC5F0\uC0B0\uC790\uB85C \uB300\uCCB4\uD574\uC8FC\uC138\uC694",noPartiallyBooleanPatternMatching:"\uBD88\uB9AC\uC5B8 \uAC12\uC5D0 \uB300\uD55C \uD328\uD134 \uB9E4\uCE6D\uC740 \uAD8C\uC7A5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC0BC\uD56D\uC5F0\uC0B0\uC790\uB85C \uB300\uCCB4\uD574\uC8FC\uC138\uC694"},fixable:"code",schema:[],docs:{description:"Boolean pattern matching is not allowed",recommended:"error"}},defaultOptions:[]}),p=w;var b={noBooleanPatternMatching:p};export{b as rules};
