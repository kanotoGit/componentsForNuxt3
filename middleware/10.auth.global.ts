import { useAuthStore } from '@/stores/auth'
import { pages } from '@/utils'

export default defineNuxtRouteMiddleware((to, from) => {
  console.log('-----')
  console.log({ from, to })
  console.log('-----')

  // 認証判定
  const { getToken, changeBeforeRedirectRoute } = useAuthStore()
  if (to.meta.isRequireAuth) {
    if (!getToken) {
      // リダイレクト前の遷移先を登録
      changeBeforeRedirectRoute(to)
      // 未認証の場合はログインページへ遷移
      return navigateTo({
        path: pages.login,
        replace: true
      })
    } else {
      // NOTE: 処理無し
    }
  } else {
    // NOTE: 処理無し
  }
})
