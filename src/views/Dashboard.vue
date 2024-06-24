<template>
  <div>
    <h1>Dashboard</h1>
    <Users />
    <Positions />
    <Requests />
    <Complaints />
  </div>
</template>

<script>
import Users from './Users.vue'
import Positions from './Positions.vue'
import Requests from './Requests.vue'
import Complaints from './Complaints.vue'

export default {
  components: {
    Users,
    Positions,
    Requests,
    Complaints
  }
}
</script>
