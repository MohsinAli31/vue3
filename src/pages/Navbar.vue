<template>
  <nav>
    <RouterLink to="/" v-if="$route.path !== '/' ">Go to Home</RouterLink>
    <RouterLink to="/about" v-if="$route.path !== '/about' ">Go to About</RouterLink>
    <RouterLink to="/my/project" v-if="$route.path !== '/my/project' ">Go to Project</RouterLink>
    <RouterLink to="/products" v-if="$route.path !== '/products' ">Go to Products</RouterLink>

  </nav>
</template>