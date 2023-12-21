"use strict";var l=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var f=Object.prototype.hasOwnProperty;var d=(o,e)=>{for(var a in e)l(o,a,{get:e[a],enumerable:!0})},M=(o,e,a,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of w(e))!f.call(o,r)&&r!==a&&l(o,r,{get:()=>e[r],enumerable:!(s=u(e,r))||s.enumerable});return o};var P=o=>M(l({},"__esModule",{value:!0}),o);var E={};d(E,{rules:()=>x});module.exports=P(E);var p=require("@typescript-eslint/utils"),n=require("@typescript-eslint/utils"),t=require("ts-pattern"),B=p.ESLintUtils.RuleCreator(o=>`https://example.com/rule/${o}`),i=()=>{},b=B({create(o){return{MemberExpression:function(e){(0,t.match)(e).with({property:{type:n.AST_NODE_TYPES.Identifier,name:"exhaustive"}},a=>{(0,t.match)(a).with({object:{type:n.AST_NODE_TYPES.CallExpression,arguments:t.P.select("secondArgument"),callee:{property:{name:"with"},type:n.AST_NODE_TYPES.MemberExpression,object:{arguments:t.P.select("firstArgument"),type:n.AST_NODE_TYPES.CallExpression,callee:{property:{name:"with"},type:n.AST_NODE_TYPES.MemberExpression,object:{callee:{name:"match"}}}}}}},({firstArgument:s,secondArgument:r})=>{let[m]=r,[h]=s;(0,t.match)([h,m]).with([{type:n.AST_NODE_TYPES.Literal},{type:n.AST_NODE_TYPES.Literal}],([g,y])=>{(0,t.match)([g.raw,y.raw]).with(t.P.union(["true","false"],["false","true"]),()=>{o.report({node:e,messageId:"noFullyBooleanPatternMatching"})}).otherwise(i)})}).otherwise(i)}).otherwise(i),(0,t.match)(e).with({property:{type:n.AST_NODE_TYPES.Identifier,name:"otherwise"}},a=>{(0,t.match)(a).with({object:{type:n.AST_NODE_TYPES.CallExpression,arguments:t.P.select("firstArgument"),callee:{property:{name:"with"},type:n.AST_NODE_TYPES.MemberExpression,object:{callee:{name:"match"}}}}},({firstArgument:s})=>{let[r]=s;(0,t.match)(r).with({type:n.AST_NODE_TYPES.Literal,raw:t.P.union("true","false")},()=>{o.report({node:e,messageId:"noPartiallyBooleanPatternMatching"})})}).otherwise(i)}).otherwise(i)}}},name:"no-boolean-pattern-matching",meta:{type:"suggestion",messages:{noFullyBooleanPatternMatching:"\uBD88\uB9AC\uC5B8 \uAC12\uC5D0 \uB300\uD55C \uD328\uD134 \uB9E4\uCE6D\uC740 \uAD8C\uC7A5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC0BC\uD56D\uC5F0\uC0B0\uC790\uB85C \uB300\uCCB4\uD574\uC8FC\uC138\uC694",noPartiallyBooleanPatternMatching:"\uBD88\uB9AC\uC5B8 \uAC12\uC5D0 \uB300\uD55C \uD328\uD134 \uB9E4\uCE6D\uC740 \uAD8C\uC7A5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC0BC\uD56D\uC5F0\uC0B0\uC790\uB85C \uB300\uCCB4\uD574\uC8FC\uC138\uC694"},fixable:"code",schema:[],docs:{description:"Boolean pattern matching is not allowed",recommended:"error"}},defaultOptions:[]}),c=b;var x={noBooleanPatternMatching:c};0&&(module.exports={rules});