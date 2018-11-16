module.exports = {
    baseUrl: "/", // 根域上下文目录
    outputDir: "dist/" + process.env.VUE_APP_CURRENTMODE, // 构建输出目录
    assetsDir: "assets", // 静态资源目录 (js, css, img, fonts)
    css: {
        loaderOptions: {
            postcss: {
                // plugins: () => [
                //     require("postcss-px2rem")({
                //         remUnit: 75
                //         // baseDpr:2
                //     })
                // ]
            }
        }
    },
    configureWebpack: {
        plugins: [],
        output: {
            publicPath: "./" // 项目部署到线上资源相对路径
        }
    }
};
