import dialog from './functionals/dialog'
import api from '@/api'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      api,
      dialog
    }
  }
})
