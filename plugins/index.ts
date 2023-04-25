import api from '@/api'
import dialog from './functionals/dialog'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      api,
      dialog,
    }
  }
})

