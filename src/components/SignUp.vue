<template>
    <div class="container">
      <form v-if="formState === 'signUp'" @submit.prevent="signUp">
        <h3>Create a new account</h3>
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
            Have an account?
            <span @click="toggle" class="action">Sign in</span>
          </p>
          <button>CONFIRM</button>
        </div>
      </form>
      <form v-else @submit.prevent="confirmSignUp">
        <h2>Confirm Sign Up</h2>
        <input type="text" v-model="code" placeholder="Enter the code..." />
        <button>Confirm</button>
      </form>
    </div>
  </template>
