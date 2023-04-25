import { useAlertStore } from '@/stores/alert/index'

/** ダイアログの処理 */
export default {
  /**
   * 確認ダイアログ
   * @param text 表示テキスト
   * @returns
   */
  confirm(text: string): Promise<boolean> {
    const { addAlert, deleteAlert } = useAlertStore()
    return new Promise((resolve) => {
      // アラート情報の登録
      addAlert({
        id: Symbol(),
        open: true,
        text,
        alertType: 'confirm',
        clickFunction(isOk: boolean) {
          resolve(isOk)
        },
        closeFunction(id: Symbol) {
          deleteAlert(id)
        }
      })
    })
  },

  /**
   * お知らせダイアログ
   * @param text 表示テキスト
   * @returns
   */
  notice(text: string): Promise<boolean> {
    const { addAlert, deleteAlert } = useAlertStore()
    return new Promise((resolve) => {
      // アラート情報の登録
      addAlert({
        id: Symbol(),
        open: true,
        text,
        alertType: 'notice',
        clickFunction(isOk: boolean) {
          resolve(isOk)
        },
        closeFunction(id: Symbol) {
          deleteAlert(id)
        }
      })
    })
  },

  /**
   * エラーダイアログ
   * @param text 表示テキスト
   * @returns
   */
  error(text: string): Promise<boolean> {
    const { addAlert, deleteAlert } = useAlertStore()
    return new Promise((resolve) => {
      // アラート情報の登録
      addAlert({
        id: Symbol(),
        open: true,
        text,
        alertType: 'error',
        clickFunction(isOk: boolean) {
          resolve(isOk)
        },
        closeFunction(id: Symbol) {
          deleteAlert(id)
        }
      })
    })
  },
}