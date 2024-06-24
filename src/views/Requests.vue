<template>
    <div>
      <h2>Requests</h2>
      <ul>
        <li v-for="request in requests" :key="request.id">{{ request.description }}</li>
      </ul>
    </div>
  </template>
  
  <script>
//   import { mapState } from 'vuex'
  
//   export default {
//     computed: {
//       ...mapState(['requests'])
//     },
//     created() {
//       this.$store.dispatch('fetchRequests')
//     }
//   }
  </script>
  