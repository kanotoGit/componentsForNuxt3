import axios, { AxiosError, AxiosResponse } from 'axios'
import { MESSAGE_ERROR } from '@/utils'

/** APIクライアントのオプション */
export interface ClientOptions {
  // NOTE: 必要に応じてデフォルト値を変える
  isShowLoading?: boolean; // ローディングの表示有無
  isRequiredAuth?: boolean; // 認証の必要有無
}
const defaultOptions: ClientOptions = {
  isShowLoading: true,
  isRequiredAuth: false
}

export const client = (options?: ClientOptions) => {
  // 環境変数
  const config = useRuntimeConfig()
  // オプション
  const {
    isShowLoading,
    isRequiredAuth
  } = { ...defaultOptions, ...options }
  // TODO: 認証トークン
  const token = 'token'
  // ローディング用Symbol
  const symbolForLoading = Symbol('for loading')

  const instance = axios.create({
    baseURL: config.public.apiUrl,
    timeout: 5000,
    timeoutErrorMessage: '通信に失敗しました。',
    headers: {
      Authorization: isRequiredAuth ? token : undefined
    }
  })

  /** リクエスト時のインターセプタ（リクエスト直前の処理） */
  instance.interceptors.request.use((request) => {
    if (isShowLoading) {
      // TODO: ローディング表示(symbolをスタックするイメージ)
      console.log(symbolForLoading)
    }
    return request
  })

  /** レスポンス時のインターセプタ（リクエスト直前の処理） */
  instance.interceptors.response.use((response: AxiosResponse<any, any>) => {
    if (isShowLoading) {
      // TODO: ローディング解除(symbolのスタックを解除するイメージ)
      console.log(symbolForLoading)
    }
    return response
  }, (error: AxiosError<any, any>) => {
    // 失敗時
    errorProcess(error)
    return Promise.reject(error)
  })

  return instance
}

/** エラー処理 */
function errorProcess (error: AxiosError<any, any>) {
  const { $dialog } = useNuxtApp()

  // NOTE: この辺の処理は各プロジェクトで要相談
  const { response } = error
  if (response) {
    const { data } = response
    if (data instanceof Blob) {
      // NOTE: レスポンスがBlobの場合のエラー処理
    } else {
      switch (response.status) {
        case 401:
          // エラー出力(401)
          $dialog.error(data.message)
          break
        case 403:
          // エラー出力(403)
          $dialog.error(data.message)
          break
        case 404:
          // エラー出力(404)
          $dialog.error(data.message)
          break
        case 422:
          // エラー出力(422)
          $dialog.error(data.message)
          break
        default:
          // その他エラーコードの出力
          $dialog.error(data.message)
          break
      }
    }
  } else {
    // 汎用エラーの出力
    $dialog.error(MESSAGE_ERROR)
  }
}
