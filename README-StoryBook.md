# storybook インストールと起動

```
$ yarn add storybook
$ npx storybook init --type vue3 --builder @storybook/builder-vite
```

# ストーリーブックの対象ファイルの変更

```
.storybook/main.js

module.exports = {
  "stories": [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
}
```
※`stories`フォルダは削除する



# アドオンの導入

## sassの導入

https://storybook.js.org/recipes/sass#recipe-section
```
$ yarn add -D @storybook/addon-styling sass sass-loader
```

```
.storybook/preview.js

import '{scssのパス}';
~省略~
```

## ソースコード表示(準備中)

https://storybook.js.org/addons/@storybook/addon-storysource
```
yarn add @storybook/addon-storysource
```


## 画像の読み込み（準備中）


## テスト（準備中）