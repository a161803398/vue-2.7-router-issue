Run `npm run check` given following error.

```
src/router/index.ts:9:7 - error TS2322: Type 'ComponentPublicInstanceConstructor<Vue3Instance<Data, Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{ title: string; }>>>, Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{ title: string; }>>>, {}, {}, true, ComponentOptionsBase<...>> & ... 5 more ... & Readonly<...>, ... 4 more ..., MethodOptions>...' is not assignable to type 'Component | undefined'.
  Type 'ComponentPublicInstanceConstructor<Vue3Instance<Data, Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{ title: string; }>>>, Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{ title: string; }>>>, {}, {}, true, ComponentOptionsBase<...>> & ... 5 more ... & Readonly<...>, ... 4 more ..., MethodOptions>...' is missing the following properties from type 'VueConstructor<Vue<Record<string, any>, Record<string, any>, never, never, never, never, (event: string, ...args: any[]) => Vue<Record<string, any>, Record<string, any>, ... 4 more ..., ...>>>': extend, nextTick, set, delete, and 10 more.

9       component: TestPage,
        ~~~~~~~~~


Found 1 error in src/router/index.ts:9
```
