const path = require('path')
const pkg = require('./package.json')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const IS_PROD = ['production', 'test'].includes(process.env.NODE_ENV)

module.exports = {
    publicPath: process.env.VUE_APP_BASEURL || '/',
    outputDir: 'dist',
    lintOnSave:false,
    productionSourceMap: false,
    chainWebpack: chain => {
        if (pkg && pkg.version) {
            chain.plugin('define')
                .tap(([options]) => {
                    options['process.env']['VUE_APP_MAP_KEY'] = '"712e82c55ebb72e976900890c66680c3"'
                    options['process.env']['VUE_APP_VERSION'] = `"${pkg.version}"`
                    return [options]
                })
        }
        chain
            .module
            .rule('images')
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({
                bypassOnDebug: true
            })
            .end()
    },
    configureWebpack: {
        resolve: {
            // extensions: ['.js', '.json'],
            alias: {
                '@': path.resolve(__dirname, './src'),
                // 'packages': path.resolve(__dirname, './packages')
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                'window.$': 'jquery'
            })

        ]
    },
    // devServer 选项单独配置
    devServer: {
        disableHostCheck: true,
        proxy: {
            "/api": {
                target: "http://100.1.1.194:8888", // 域名
                changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                // pathRequiresRewrite: {
                //   "^/api": "/"
                // }
            },
        }
    },
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: IS_PROD,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            sass: {
                data: `
              @import "@/assets/css/common.scss";
        `
            },
            // postcss: {
            //     plugins: [
            //         autoprefixer(),
            //         pxtorem({
            //             rootValue: 100,
            //             // propList: ['*', '!font-size'],
            //             propList: ['*'],
            //             // 该项仅在使用 Circle 组件时需要
            //             // 原因参见 https://github.com/youzan/vant/issues/1948
            //             // selectorBlackList: ['van-circle__layer']
            //         })
            //     ]
            // }
        },
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    }
}
