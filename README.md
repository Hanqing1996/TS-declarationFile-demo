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

#### 在 ts 中引用 js
1. 创建 v.js，export 一个函数 add
2. 创建 v.d.ts，声明 add 的函数类型。编译器会自动将 v.js 与 v.d.ts 绑定
3. 在 1.js 中 引用 add

#### 在 ts 中创建 window 变量
1. 在 1.ts 中进行声明
```
declare global {
    interface Window {
        server: {
            host: String
        }
    }
}
```
2. 直接在 2.ts 中使用
```
console.log(window.server.host)
```

#### 扩展 react 模块
1. 在 1.ts 中进行声明
```
declare module 'react'{
    const xxx:Number
}
```
2. 直接在 2.ts 中使用
```
console.log(React.xxx)
```