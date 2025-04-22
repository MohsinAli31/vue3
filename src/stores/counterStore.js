// stores/counterStore.js 
// // option store
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2
  }
})


// setup store
// stores/counterStore.js
// import { defineStore } from 'pinia'
// import { computed, ref } from 'vue'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)

//   // Actions
//   const increment = () => {
//     count.value++
//   }

//   const decrement = () => {
//     count.value--
//   }

//   // Getter
//   const doubleCount = computed(() => count.value * 2)

//   return {
//     count,
//     increment,
//     decrement,
//     doubleCount
//   }
// })

