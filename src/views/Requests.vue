<template>
  <div class="request-page">
    <div class="header">
      <h1>Manage Your Requests</h1>
    </div>

    <!-- Form to Submit a New Request -->
    <div class="new-request-form">
      <h2>Create a New Request</h2>
      <form @submit.prevent="submitNewRequest">
        <div class="form-group">
          <label for="requestType">Request Type</label>
          <select id="requestType" v-model="newRequest.type" class="form-control">
            <option disabled value="">Select a request type</option>
            <option value="Salary Increase">Salary Increase</option>
            <option value="Leave">Leave</option>
            <option value="Equipment">Equipment</option>
          </select>
        </div>
        <div class="form-group">
          <label for="requestDescription">Description</label>
          <textarea id="requestDescription" v-model="newRequest.description" class="form-control" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit Request</button>
      </form>
    </div>

    <!-- Request History Table -->
    <div class="request-history">
      <h2>Your Request History</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Status</th>
            <th>Date Submitted</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="request in requests" :key="request.id">
            <td>{{ request.type }}</td>
            <td>{{ request.description }}</td>
            <td>{{ request.status }}</td>
            <td>{{ request.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newRequest: {
        type: '',
        description: ''
      },
      requests: [
        { id: 1, type: 'Leave', description: 'Annual leave for 2 weeks.', status: 'Approved', date: '2023-01-15' },
        { id: 2, type: 'Salary Increase', description: 'Request for 10% salary increase.', status: 'Pending', date: '2023-02-01' }
      ]
    };
  },
  methods: {
    submitNewRequest() {
      const newRequest = {
        id: this.requests.length + 1,
        type: this.newRequest.type,
        description: this.newRequest.description,
        status: 'Pending',
        date: new Date().toISOString().slice(0, 10)
      };
      this.requests.push(newRequest);
      this.newRequest.type = '';
      this.newRequest.description = ''; // Reset the form

      console.log('New request submitted:', newRequest);
      // Implement API call to save the request
    }
  }
}
</script>

<style scoped>
.request-page {
  display: flex;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  flex-direction: column;
}
.header {
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  margin-bottom: 20px;
}
.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th, .table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.table th {
  background-color: #f4f4f4;
}
</style>
