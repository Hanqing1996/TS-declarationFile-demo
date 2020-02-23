#### tsc
只需要安装 typescript 一个依赖即可

#### tsc 1.ts
> 生成 1.js（1.ts 编译成 js 的结果）

#### tsc 1.ts -d
> 生成 1.d.ts（类型声明文件）

#### 提供给别人使用 *.d.ts
1. 上传到[社区](https://github.com/DefinitelyTyped/DefinitelyTyped)
2. 在 package.json 添加 type 字段
> main 与 type 为绑定关系
```
  "main": "1.js",
  "type":"1.t.ts",
```