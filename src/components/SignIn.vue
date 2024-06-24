<template>
    <div class="container">
      <form @submit.prevent="login">
        <h3>Sign in to your account</h3>
        <div>Username *</div>
        <input
          type="email"
          v-model="email"
          placeholder="Enter your username..."
        />
        <div>Password *</div>
        <input
          type="password"
          v-model="password"
          placeholder="Enter your password..."
        />
        <div class="container-footer">
          <p>
            No account? <span @click="toggle" class="action">Create account</span>
          </p>
          <button>SIGN IN</button>
        </div>
      </form>
    </div>
  </template>
  