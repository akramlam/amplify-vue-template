<script setup>
  import { Authenticator } from "@aws-amplify/ui-vue";
  import "@aws-amplify/ui-vue/styles.css";

  import { Amplify } from 'aws-amplify';
  import outputs from '../amplify_outputs.json';

  Amplify.configure(outputs);
</script>

<template>
  <authenticator>
        
    <template v-slot="{ user, signOut }">
        <h1>Hello {{user?.signInDetails?.loginId}}</h1>
      <button @click="signOut">Sign Out</button>
      <Users />
    <Positions />
    <Requests />
    <Complaints />
    </template>
  </authenticator>
</template>

<style>
  .dashboard {
    padding: 2rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    .h1 {
      font-size: 2rem;
    }
  }

  .main-content {
    .card {
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      margin-bottom: 2rem;

      p {
        margin-top: 1rem;
      }
    }

    .welcome-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .row {
      display: flex;
      gap: 2rem;
    }

    .col-sm-6 {
      flex: 1;
    }

    .card {
      flex: 1;
    }
  }
</style>