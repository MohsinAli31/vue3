// stores/userStore.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: null,
    loading: false,
    error: null
  }),
  actions: {
    async fetchUser() {
      this.loading = true
      this.error = null
      try {
        // Mock API example using jsonplaceholder
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const data = await response.json()
        this.userData = data
      } catch (error) {
        this.error = 'Failed to fetch user'
      } finally {
        this.loading = false
      }
    }
  }
})
