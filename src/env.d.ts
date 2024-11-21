declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

/*
    declare module的主要作用是描述一个外部模块的类型信息，允许开发者在使用没有自带类型定义文件的JavaScript库时，通过声明模块来提供类型信息，
    从而避免类型错误。它强调模块的边界，允许为整个模块或模块内的特定部分（如类、接口、函数等）提供类型声明‌

*/
