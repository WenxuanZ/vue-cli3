const path = require('path')

function resolve(dir) {
    return path.join(__dirname, './', dir)
}
module.exports = {
    chainWebpack: config => {
        config.plugin('define').tap(args => {
            const argv = process.argv
            const mode = argv[argv.indexOf('--project-mode') + 1]
            args[0]['process.env'].MODE = `"${mode}"`
            arg[0]['process.env'].BASE_API = '"http://47.94.138.75:8000"'
        })
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule.exclude.add(/node_modules/)
        svgRule
            .test(/\.svg$/)
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
        const imagesRule = config.module.rule('images')
        imagesRule.exclude.add(resolve('src/icons'))
        config.module
            .rule('images')
            .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    }
}