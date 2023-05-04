// import { MESSAGE_ERROR, MESSAGE_ERROR_RELOAD } from '@/utils'
// import dialog from './functionals/dialog'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error) => {
    console.error('errorHandler: ', error)

    // NOTE: エラーページに遷移する場合
    if (error instanceof Error) {
      showError(error)
    } else {
      showError({ statusCode: 400, statusMessage: 'Bad Request' })
    }

    // NOTE: アラートのみ出す場合(`error`, `unhandledrejection`イベントの場合は別途考える)
    // await dialog.error(`${MESSAGE_ERROR}\n${MESSAGE_ERROR_RELOAD}`)
    // window.location.reload()
  }
})
