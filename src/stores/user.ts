// @ts-check
import { defineStore } from 'pinia'

export interface User {
  uid: string
  email: string
  displayName?: string
  photoURL?: string
}

interface State {
  user: User | null
}



export const useUserStore = defineStore({
  id: 'user',

  getters: {
    isLoggedIn: (state) => false,
  },

  actions: {
    
  },
})
