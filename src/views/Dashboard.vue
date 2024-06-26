<script setup>
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";

import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';

Amplify.configure(outputs);
</script>

<template>


  <div class="dashboard">
    <div class="header">
      <div class="h1">Employee Dashboard</div>
    </div>

    <div class="main-content">
      <div class="card welcome-card">
        <authenticator>

          <template v-slot="{ user }">
            <h1>Hello {{ user?.signInDetails?.loginId }}</h1>
          </template>
        </authenticator>


        <p>
          Here you can manage your profile, view HR requests, communicate internally, and adjust your settings.
        </p>
      </div>


      <div class="row">
        <div class="col-sm-6 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">HR Requests</h5>
              <p class="card-text">Manage vacation, sick leaves, and other HR-related requests.</p>
              <a href="#" class="btn btn-primary">View Requests</a>
            </div>
          </div>
        </div>

        <div class="col-sm-6 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Departmental Changes</h5>
              <p class="card-text">Submit or check the status of departmental change requests.</p>
              <a href="#" class="btn btn-primary">Manage Changes</a>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Communications</h5>
              <p class="card-text">Access internal messages and announcements.</p>
              <a href="#" class="btn btn-primary">Go to Communications</a>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Settings</h5>
              <p class="card-text">Adjust your profile and preferences.</p>
              <a href="#" class="btn btn-primary">Update Settings</a>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Employee Information</h5>
              <ul class="list-unstyled">
                <li><strong>Position:</strong> {{ user.position }}</li>
                <li><strong>Salary:</strong> {{ user.salary | currency }}</li>
                <li><strong>Total Work Hours:</strong> {{ user.totalHours }} hours</li>
                <li><strong>Annual Leave Days:</strong> {{ user.annualLeave }} days</li>
                <li><strong>Leave Remaining:</strong> {{ user.leaveRemaining }} days</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Requests History</h5>
              <div class="request-history">
                <ul>
                  <li v-for="request in user.requestHistory" :key="request.id">
                    <span>{{ request.type }} - {{ request.status }} on {{ request.date }}</span>
                  </li>
                  <button @click="refreshData" class="btn btn-primary">Refresh Data</button>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Refresh functionality to reflect updated data after HR requests -->
    </div>
  </div>
</template>

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
      // Implement API call or state update logic here
      console.log('Data refreshed!');
    }
  },
  filters: {
    currency(value) {
      return `$${parseFloat(value).toFixed(2)}`;
    }
  }
}</script>

<style scoped>
.dashboard {
  display: flex;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  flex-direction: column;

}

.header {
  width: 100%;
  background-color: #0c2545;
  color: white;
  padding: 10px 20px;
}



.nav {
  padding-top: 20px;
}

.nav-link {
  color: #0c2545;
  padding: 10px 15px;
  display: block;
}

.nav-link:hover {
  background-color: #e2e6ea;
  color: #0056b3;
  text-decoration: none;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
  background: #e9ecef;
}

.card {
  margin-bottom: 20px;
  padding: 1rem !important;
}

.card-body {
  padding: 0 !important;

}

.welcome-card {
  background-color: #fff;
  border: 1px solid #dee2e6;
  padding: 20px;
}

h1,
h2,
h5 {
  margin-bottom: 15px;
}

.btn-primary {
  background-color: #0c2545 !important;
  border-color: #0c2545 !important;
}
</style>
