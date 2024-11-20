Vite 主要由两部分组成
一个开发服务器，它基于 原生 ES 模块 提供了 丰富的内建功能，如速度快到惊人的 模块热更新（HMR）,Vite 将会使用 esbuild 预构建依赖。Esbuild 使用 Go 编写，并且比以 JavaScript 编写的打包器预构建依赖快 10-100 倍
一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源

Vite 默认的类型定义是写给它的 Node.js API 的,要将其补充到一个 Vite 应用的客户端代码环境中
客户端类型
如果你的库依赖于某个全局库
使用/// 指令
三斜线指令仅可放在包含它的文件的最顶端
三斜线引用告诉编译器在编译过程中要引入的额外的文件
/// <reference types="vite/client" />
同时，你也可以将 vite/client 添加到 tsconfig 中的 compilerOptions.types 下：

{
"compilerOptions": {
"types": ["vite/client"]
}
}
这将会提供以下类型定义补充：

资源导入 (例如：导入一个 .svg 文件)
import.meta.env 上 Vite 注入的环境变量的类型定义
import.meta.hot 上的 HMR API 类型定义
