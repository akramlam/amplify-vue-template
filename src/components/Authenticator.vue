<template>
  <div class="dashboard-container">
    <!-- Sidebar Menu -->


    <!-- Authentication Section -->
    <div class="auth-page">
      <authenticator>
        <template v-slot="{ user, signOut }">
          <div class="user-greeting">
            <h1>Hello {{user?.signInDetails?.loginId}}</h1>
            <button class="sign-out-btn" @click="signOut">Sign Out</button>
          </div>
        </template>
      </authenticator>
    </div>
  </div>
</template>

<script setup>
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
Amplify.configure(outputs);
</script>

<style>
.dashboard-container {
  display: flex;
  height: 100%;
  background-color: #f4f6f8;
}

.auth-page {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-greeting {
  text-align: center;
  background-color: #ffffff;
  padding: 60px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 640px;
}

h1 {
  font-size: 1.75rem;
  color: #32325d;
  margin-bottom: 20px;
}

.sign-out-btn {
  background-color: #167bff;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.sign-out-btn:hover {
  background-color: #0056b3;
}
</style>

