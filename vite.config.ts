import { join } from 'path'
import modulesPlugin from './vite-plugin/modules-plugin.js'

const pathResolve = (path: string) => join(__dirname, path)

export default {
	// vite端口
	port: 3000,
	
	// 输出路径
	outDir: 'dist',

	// 别名包 必须以 / 开头、结尾
	alias: {
		// '/@/': root, -- vite 内部在用，这里不能用了
		// '/root/': __dirname, -- vite 内部在用，这里不能用了
		'/@/': pathResolve('src'),
		'/@assets/': join(__dirname, 'src/assets'),
		'/@common/': join(__dirname, 'src/common'),
		'/@components/': join(__dirname, 'src/components'),
		'/@views/': join(__dirname, 'src/views/'),
		'/@lib/': join(__dirname, 'src/common/lib')
	},

	// 配置Dep优化行为
	optimizeDeps: {
		include: ["lodash"]
	},

	// 资源路径
	assetsDir: 'assets',

	// 小于此数字（以字节为单位）的静态资产文件将内联为 base64字符串。默认限制为“4096”（4kb）。设置为“0”以禁用。
	assetsInlineLimit: 0,

	//是否对CSS进行代码拆分。启用时，异步块中的CSS将在块中作为字符串内联，并通过动态创建的加载块时的样式标记。
	cssCodeSplit: false,

	// 插件属性
	// plugins: [modulesPlugin('router')],

	// 代理
	// proxy: {
	// 	// '/foo': 'http://localhost:4567/foo',

	// 	// '/api': {
	// 	//   target: 'http://proxy.com',
	// 	//   changeOrigin: true,
	// 	//   rewrite: path => path.replace(/^\/api/, '')
	// 	// }
	// },

	// 打包引入
	// rollupInputOptions: {
	// },

	// 打包输出
	// rollupOutputOptions: {
	// 	format: 'commonjs',
	// },

	// 要将一些共享的全局变量传递给所有的Less样式
	// cssPreprocessOptions: {
	//     less: {
	//       modifyVars: {
	//         'preprocess-custom-color': 'green'
	//       }
	//     }
	//   }
}
