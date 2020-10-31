import { createStore, ModuleTree } from 'vuex'

// 插件导入
var _modules: ModuleTree<any>

export default createStore({
  state: {
	  title: 'ddd'
  },
  mutations: {
	  /**
	   * @param {Object} info
	   * 0是状态属性名称
	   * 1是赋予状态属性的值
	   */
	  set_vuex(state: any, info: Array<string>) {
	  	state[info[0]] = info[1]
	  }
  },
  actions: {
	  
  },
  // modules: _modules
})