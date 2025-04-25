<template>
  <nav>
    <RouterLink to="/" v-if="$route.path !== '/'">Go to Home</RouterLink>
    <RouterLink to="/about" v-if="$route.path !== '/about'">Go to About</RouterLink>
    <RouterLink to="/my/project" v-if="$route.path !== '/my/project'">Go to Project</RouterLink>
    <RouterLink to="/products" v-if="$route.path !== '/products'">Go to Products</RouterLink>
    <RouterLink to="/ProfileView" v-if="$route.path !== '/ProfileView'">Profileview</RouterLink>
    
    <!-- Logout Button -->
    <button @click="logout" style="margin-left: 1rem;">Logout</button>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const logout = () => {
      localStorage.removeItem('authToken')
      router.push('/login')
    }

    return {
      logout
    }
  }
}
</script>
