import { defineStore } from 'pinia'
import { UserInfo } from '@/types/api'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    /** ログインユーザ情報 */
    user: null as UserInfo | null,
    /** アクセストークン */
    token: ''
  }),
  getters: {
    /** ログインユーザ情報 取得 */
    getLoginUser (): UserInfo | null {
      return this.user
    }
  },
  actions: {
    /** ログイン処理 */
    async login (id: string, password: string): Promise<boolean> {
      const { $api } = useNuxtApp()
      try {
        if (id && password) {
          const response = await $api.auth.registLogin({
            id,
            password
          })
          if (response) {
            // ログイン成功
            this.changeLoginUser(response.userInfo)
            this.changeToken(response.token)
            return true
          }
        }
        // ログイン失敗
        this.logout()
        return false
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
     * アクセストークン情報 更新
     * @param { string | null } アクセストークン情報
     */
    changeToken (token: string | null) {
      this.token = token || ''
    }
  }
})
