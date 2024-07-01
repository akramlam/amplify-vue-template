<template>
  <div class="dashboard">
    <header class="header">
      <h1 class="dashboard-title">Employee Dashboard</h1>
    </header>

    <main class="main-content">
      <authenticator>
        <template v-slot="{ user }">
          <div class="welcome-card">
            <h1>Welcome back, {{ user?.signInDetails?.loginId }}</h1>
            <p>Manage your profile, view HR requests, communicate internally, and adjust your settings below.</p>
          </div>
        </template>
      </authenticator>

      <section class="cards">
        <div class="card" @click="$router.push('/requests')">
          <h5 class="card-title">HR Requests</h5>
          <p class="card-text">Manage vacation, sick leaves, and other HR-related requests.</p>
        </div>

        <div class="card" @click="$router.push('/positions')">
          <h5 class="card-title">Departmental Changes</h5>
          <p class="card-text">Submit or check the status of departmental change requests.</p>
        </div>

        <div class="card" @click="$router.push('/complaints')">
          <h5 class="card-title">Communications</h5>
          <p class="card-text">Access to your complaints and check their status or submit one.</p>
        </div>

        <div class="card" @click="$router.push('/users')">
          <h5 class="card-title">Settings</h5>
          <p class="card-text">Adjust your profile and preferences.</p>
        </div>
      </section>

      <section class="info-sections">
        <div class="card employee-info">
          <h5 class="card-title">Employee Information</h5>
          <ul class="list-unstyled">
            <li><strong>Position:</strong> {{ user.position }}</li>
            <li><strong>Salary:</strong> {{ user.salary | currency }}</li>
            <li><strong>Total Work Hours:</strong> {{ user.totalHours }} hours</li>
            <li><strong>Annual Leave Days:</strong> {{ user.annualLeave }} days</li>
            <li><strong>Leave Remaining:</strong> {{ user.leaveRemaining }} days</li>
          </ul>
        </div>

        <div class="card request-history">
          <h5 class="card-title">Requests History</h5>
          <ul>
            <li v-for="request in user.requestHistory" :key="request.id">
              <span>{{ request.type }} - {{ request.status }} on {{ request.date }}</span>
            </li>
          </ul>
          <button @click="refreshData" class="btn btn-primary">Refresh Data</button>
        </div>
      </section>
    </main>
  </div>
</template>


<script setup>
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
Amplify.configure(outputs);
</script>

<script>
export default {
  data() {
    return {
      user: {
        name: 'John Doe',
        cne: '123456',
        position: 'Software Engineer',
        salary: 50000,
        totalHours: 2080,
        annualLeave: 30,
        leaveRemaining: 12,
        requestHistory: [
          { id: 1, type: 'Vacation', status: 'Approved', date: '2022-07-01' },
          { id: 2, type: 'Sick Leave', status: 'Rejected', date: '2022-08-15' }
        ]
      }
    };
  },
  methods: {
    refreshData() {
      // This method should call an API to fetch the latest data
      console.log('Data refreshed!');
    }
  },
  filters: {
    currency(value) {
      return `$${parseFloat(value).toFixed(2)}`;
    }
  }
}
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header {
  background-color: #0052cc;
  color: white;
  padding: 20px;
  text-align: center;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers the content vertically in the main content area */
}

.cards, .info-sections {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* This will center the cards horizontally */
  gap: 20px;
}

.card {
  cursor: pointer;
  padding: 20px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.welcome-card {
  width: 100%;
  margin-bottom: 20px;
}

.btn-primary {
  background-color: #0052cc;
  border: none;
}
</style>
