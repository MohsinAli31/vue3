<template>
    <div>
        <h2>User Profile for ID: {{ userId }}</h2>
    </div>
</template>

  <script>
  export default {
    data() {
      return {
        userId: null
      }
    },
  
    beforeRouteEnter(to, from, next) {
      console.log('Before Entering with ID:', to.params.id)
      next(vm => {
        vm.userId = to.params.id
      })
    },
  
    beforeRouteUpdate(to, from, next) {
      console.log('Route updated with ID:', to.params.id)
      this.userId = to.params.id
      next()
    },
  
    beforeRouteLeave(to, from, next) {
      const leave = confirm('Are you sure you want to leave this page?')
      if (leave) next()
      else next(false)
    }
  }
  </script>
  