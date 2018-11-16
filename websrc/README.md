## VUE-CLI3 SPA 脚手架

---

#### 项目介绍

-   单页应用，使用路由 beforeEach 改变每个 hash 页面的 title。
-   使用 **ESlint** + **Prettier** 实现代码检查和格式化， 需要安装对应插件并修改相关配置。例如在 vscode 下安装 ESLint 和 Prettier - Code formatter 插件，快捷键`Command + ,`下加入如下配置，可实现在代码保存时自动格式化。**editor.formatOnSave** 用于识别 **.vue**文件。

```json
    "prettier.eslintIntegration": true,
    "eslint.autoFixOnSave": true,
    "editor.formatOnSave": true,
        "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "vue",
            "autoFix": true
        }
    ]
```

-   vue-cli3 webpack 配置在 **vue.config.js** 文件下。
