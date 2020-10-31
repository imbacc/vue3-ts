const fs = require('fs')
const requireContext = require('require-context')
const path = require('path')
const { Readable } = require('stream')

// 用于读取 config router store 下module的子配置信息
const fs_fun = (name) => {
	let url = `/common/${name}/index.js`,dir = `./src/common/${name}/module`, modules = [],names = []
	fs.readdirSync(dir).map((f) => {
		names.push(`...${f.split('.')[0]},`)
		modules.push(`import ${f.split('.')[0]} from '/common/${name}/module/${f}'`)
	})
	return {
		url,
		names,
		modules
	}
}

// 读取body内容
const readBody = async (stream) => {
	if (stream instanceof Readable) {
		return new Promise((resolve, reject) => {
			let res = ''
			stream.on('data', (chunk) => res += chunk).on('end', () => resolve(res))
		})
	} else {
		return stream.toString()
	}
}

// 导出插件
export default () => {
	const fs_name = ['config', 'router', 'store']
	const check = {}
	const namelist = {}
	for (let name of fs_name) {
		const { url, names, modules } = fs_fun(name)
		check[url] = modules
		namelist[url] = names
	}
	
	// console.log('check=', check)
	
	const configureServer = [
		async ({ app }) => {
			app.use(async (ctx, next) => {
				await next()
				if (ctx.response.is('js')) {
					// console.log('ctx.url=', ctx.url)
					const ck = check[ctx.url]
					if (ck !== undefined){
						// console.log('ck=', ck)
						const str = ck.join('\n')
						const name = namelist[ctx.url].join('\n	')
						// console.log('str=', str)
						const html = await readBody(ctx.body)
						const body = `${str}\n${html}`
						ctx.body = body.replace(/..._modules,/, `${name}`)
					}
				}
			})
		}
	]

	return {
		configureServer
	}
}
