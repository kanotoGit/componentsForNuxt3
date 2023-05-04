https://nuxt.com/docs/getting-started/error-handling#error-handling
https://qiita.com/clomie/items/73fa1e9f61e5b88826bc

# エラーのハンドリング方法

```ts
// @/plugins/error.ts

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = async (error, context) => {
    // エラー処理
  }
})
```

```ts
// @/app.vue

/** エラーハンドリング */
window.addEventListener('error', () => {
  console.log('error');
  showError({ statusCode: 400, statusMessage: 'Bad Request' })
});
window.addEventListener('unhandledrejection', () => {
  console.log('unhandledrejection');
  showError({ statusCode: 400, statusMessage: 'Bad Request' })
});
```


## 明示的にエラーを発生させる場合

```js
throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
```

## エラーを解除する場合

```js
clearError({ redirect: '/' })
```



# エラーページ(ページ全体を置き換え)

ディレクトリ：`@/error.vue`
表示する画面をこのファイルに実装する

## エラー時にエラーページに遷移する方法

```js
showError(error)
```



# エラーページ(要素の一部を置き換え)

`<NuxtErrorBoundary>`を使う

```vue
<template>
  <NuxtErrorBoundary>
    <div>通常の要素</div>
    <template #error={ error, clearError }>
      エラー時の要素
    </template>
  </NuxtErrorBoundary>
</template>
```