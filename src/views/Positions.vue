<template>
  <div class="position-change-section">
    <header class="page-header">
      <h1>Request Position Change</h1>
    </header>

    <form @submit.prevent="submitPositionChange" class="position-form">
      <div class="form-group">
        <label for="currentPosition">Current Position</label>
        <input type="text" id="currentPosition" v-model="user.position" disabled class="form-control">
      </div>

      <div class="form-group">
        <label for="newPosition">Select New Position</label>
        <select id="newPosition" v-model="positionChangeRequest.newPosition" class="form-control">
          <option disabled value="">Please select one</option>
          <option v-for="position in availablePositions" :key="position" :value="position">
            {{ position }}
          </option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">Submit Request</button>
    </form>

    <section class="position-change-history">
      <h2>Your Position Change Requests</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Requested Position</th>
            <th>Status</th>
            <th>Date Submitted</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="request in positionChangeRequests" :key="request.id">
            <td>{{ request.newPosition }}</td>
            <td>{{ request.status }}</td>
            <td>{{ request.date }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        position: 'Junior Developer'
      },
      positionChangeRequest: {
        newPosition: ''
      },
      availablePositions: ['Senior Developer', 'Project Manager', 'Product Designer', 'HR Specialist'],
      positionChangeRequests: [
        { id: 1, newPosition: 'Product Designer', status: 'Pending', date: '2023-01-20' }
      ]
    };
  },
  methods: {
    submitPositionChange() {
      const newRequest = {
        id: this.positionChangeRequests.length + 1,
        newPosition: this.positionChangeRequest.newPosition,
        status: 'Pending',
        date: new Date().toISOString().slice(0, 10)
      };
      this.positionChangeRequests.push(newRequest);
      this.positionChangeRequest.newPosition = ''; // Reset the form

      console.log('Position change request submitted:', newRequest);
      // Implement API call to save the request
    }
  }
}
</script>

<style scoped>
.position-change-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.page-header {
  width: 100%;
  background-color: #0056b3;
  color: white;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
}

.position-form {
  width: 100%;
  max-width: 600px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border-radius: 8px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.table th, .table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.table th {
  background-color: #f8f9fa;
}

.btn-primary {
  background-color: #0056b3;
  border: none;
  padding: 10px 20px;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
</style>
