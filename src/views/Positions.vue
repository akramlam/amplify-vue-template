<template>
  <div class="position-change-section">
    <div class="header">
      <h1>Request Position Change</h1>
    </div>

    <form @submit.prevent="submitPositionChange">
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

    <div class="position-change-history">
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
    </div>
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
.position-change-section{
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
