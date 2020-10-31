import { reactive, provide, inject } from 'vue'

export const stateSymbol = Symbol('num')
export const numObj = reactive({ num: 0 })
export const numAddFun = () => numObj.num++
export const useState = () => inject(stateSymbol)
export const provideState = () => provide(stateSymbol, numObj)