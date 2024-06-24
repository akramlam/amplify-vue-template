<template>
    <div>
      <h2>Complaints</h2>
      <ul>
        <li v-for="complaint in complaints" :key="complaint.id">{{ complaint.detail }}</li>
      </ul>
    </div>
  </template>
  
  <script>
//   import { mapState } from 'vuex'
  
//   export default {
//     computed: {
//       ...mapState(['complaints'])
//     },
//     created() {
//       this.$store.dispatch('fetchComplaints')
//     }
//   }
  </script>
  