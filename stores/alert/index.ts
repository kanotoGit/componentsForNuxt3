import { defineStore } from 'pinia'
import { AlertInfo } from '@/types/alert'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    /** アラート情報リスト */
    alertList: [] as AlertInfo[]
  }),
  getters: {
    /** アラート情報リスト 取得 */
    getAlertList (): AlertInfo[] {
      return this.alertList
    }
  },
  actions: {
    /**
     * アラートの追加
     * @param {AlertInfo} data アラート情報
     */
    addAlert (data: AlertInfo) {
      this.alertList.push(data)
    },

    /**
     * アラートの削除
     * @param {Symbol} id アラートID
     */
    deleteAlert (id: Symbol) {
      this.alertList = this.alertList.filter(
        item => item.id !== id
      )
    }
  }
})
