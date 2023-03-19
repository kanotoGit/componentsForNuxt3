
# Eslintのインストール

```
yarn add -D @nuxtjs/eslint-config @nuxtjs/eslint-config-typescript eslint typescript @babel/eslint-parser
```

# 設定

```
.eslintrc.js

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint']
}
```

# typescript タイプチェッカー用のパッケージインストール

```
yarn add -D vue-tsc
```

# 実行コマンド

```
package.json

"scripts": {
  "lint": "eslint . && nuxi typecheck",
  "lint:fix": "eslint . --fix && nuxi typecheck"
}
```

※prettierは非推奨
https://nuxt.com/docs/community/contribution#use-eslint