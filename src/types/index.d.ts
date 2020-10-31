// 如果懒得写声明，可以直接这样，表示为any
// declare module '模块名称'

// 更详细的声明
// declare module '模块名称' {
//   const Switch: 模块类型 -> 可参考shims-vue.d.ts
//   export default Switch
// }

// // 这里也可以对现有的全局类型进行扩展
// // 现在可以访问father.baba
// declare interface father {
//   baba: boolean
// }

// declare const md5: '@types/qs'