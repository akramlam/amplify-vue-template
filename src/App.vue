<template>
  <div id="app">
    <div :class="{ 'nav-open': sidebar }">
      <nav>
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
      <router-link to="/dashboard">Dashboard</router-link> 
      <router-link to="/auth">Auth</router-link>
    <router-view />
    </nav>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      sidebar: true
    }
  }
}
</script>

<style>
/* Ajoute ton style global ici */
</style>
