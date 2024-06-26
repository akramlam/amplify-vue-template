<template>
  <div class="complaint-page">
    <div class="header">
      <h1>Complaint Submission</h1>
    </div>

    <div class="new-complaint-form">
      <h2>Submit a New Complaint</h2>
      <form @submit.prevent="submitComplaint">
        <div class="form-group">
          <label for="complaintTitle">Title</label>
          <input type="text" id="complaintTitle" v-model="newComplaint.title" required class="form-control">
        </div>
        <div class="form-group">
          <label for="complaintDescription">Description</label>
          <textarea id="complaintDescription" v-model="newComplaint.description" required class="form-control"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit Complaint</button>
      </form>
    </div>

    <div class="complaint-history">
      <h2>Your Complaints</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Date Submitted</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="complaint in complaints" :key="complaint.id">
            <td>{{ complaint.title }}</td>
            <td>{{ complaint.description }}</td>
            <td>{{ complaint.status }}</td>
            <td>{{ complaint.date }}</td>
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
      newComplaint: {
        title: '',
        description: ''
      },
      complaints: [
        { id: 1, title: 'Unresolved Issue', description: 'Issue description here...', status: 'Pending', date: '2023-01-10' },
        { id: 2, title: 'HR Concern', description: 'Detailed concern...', status: 'Resolved', date: '2023-02-15' }
      ]
    };
  },
  methods: {
    submitComplaint() {
      // API call to submit the new complaint
      const newComplaint = {
        id: this.complaints.length + 1,
        title: this.newComplaint.title,
        description: this.newComplaint.description,
        status: 'Pending',
        date: new Date().toISOString().slice(0, 10)
      };
      this.complaints.push(newComplaint);

      // Reset form
      this.newComplaint.title = '';
      this.newComplaint.description = '';

      console.log('Complaint submitted:', newComplaint);
    }
  }
}
</script>

<style scoped>
.complaint-page{
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
.header h1, .new-complaint-form h2, .complaint-history h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
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
