import { defineStore } from 'pinia'
import { RouteLocationNormalized } from 'vue-router'
import { UserInfo } from '@/types/api'
import { MESSAGE_EMPTY_LOGIN } from '@/utils'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    /** ログインユーザ情報 */
    user: null as UserInfo | null,
    /** アクセストークン */
    token: '',
    /** ログインページへのリダイレクト前の遷移先 */
    beforeRedirectRoute: null as RouteLocationNormalized | null
  }),
  getters: {
    /** ログインユーザ情報 取得 */
    getLoginUser (): UserInfo | null {
      return this.user
    },
    /** アクセストークン 取得 */
    getToken (): string | null {
      return this.token
    },
    /** ログインページへのリダイレクト前の遷移先 取得 */
    getBeforeRedirectRoute (): RouteLocationNormalized | null {
      return this.beforeRedirectRoute
    }
  },
  actions: {
    /** ログイン処理 */
    async login (id: string, password: string): Promise<boolean> {
      const { $api, $dialog } = useNuxtApp()
      try {
        if (id && password) {
          const response = await $api.auth.registLogin({
            id,
            password
          })
          // ログイン成功
          this.changeLoginUser(response.userInfo)
          this.changeToken(response.token)
          return true
        } else {
          // ID or パスワードが空の場合はエラー
          this.logout()
          $dialog.error(MESSAGE_EMPTY_LOGIN)
          return false
        }
      } catch (error) {
        console.error(error)
        // ログイン失敗
        this.logout()
        return false
      }
    },

    /** ログアウト処理 */
    logout () {
      this.changeLoginUser(null)
      this.changeToken(null)
    },

    /**
     * ログインユーザ情報 更新
     * @param { UserInfo | null } ログインユーザ情報
     */
    changeLoginUser (userInfo: UserInfo | null) {
      this.user = userInfo
    },

    /**
     * ログインページへのリダイレクト前の遷移先 更新
     * @param { RouteLocationNormalized | null } route ログインページへのリダイレクト前の遷移先
     */
    changeBeforeRedirectRoute (route: RouteLocationNormalized | null) {
      this.beforeRedirectRoute = route
    },

    /**
     * アクセストークン情報 更新
     * @param { string | null } アクセストークン情報
     */
    changeToken (token: string | null) {
      this.token = token || ''
    }
  }
})
