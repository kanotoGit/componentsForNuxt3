# 環境変数の作成

## 環境変数の定義

```
nuxt.config.ts

export default defineNuxtConfig({
  runtimeConfig: {
    someApiKey: process.env.SOME_API_KEY
    public: {
      nuxtEnv: process.env.NUXT_ENV
    }
  }
})
```

```
.env.development

NUXT_ENV=development
SOME_API_KEY=XXXXXXXXXX
```

```
.env.production

NUXT_ENV=production
SOME_API_KEY=YYYYYYYYYY
```


## 実行コマンドの変更

```
package.json

{
  "scripts": {
    "build": "nuxt build --dotenv .env.production",
    "dev": "nuxt dev --dotenv .env.development",
  },
}
```
※関係ない記述は省略


# 呼び出し

```
<script setup>
const config = useRuntimeConfig()
console.log(config.public.nuxtEnv)
</script>
```