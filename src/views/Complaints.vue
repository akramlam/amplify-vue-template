<template>
  <div class="complaint-page">
    <header class="page-header">
      <h1>Complaint Submission</h1>
    </header>

    <section class="new-complaint-form">
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
    </section>

    <section class="complaint-history">
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
    </section>
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
      const newComplaint = {
        id: this.complaints.length + 1,
        title: this.newComplaint.title,
        description: this.newComplaint.description,
        status: 'Pending',
        date: new Date().toISOString().slice(0, 10)
      };
      this.complaints.push(newComplaint);
      this.newComplaint.title = '';
      this.newComplaint.description = '';
      console.log('Complaint submitted:', newComplaint);
    }
  }
}
</script>

<style scoped>
.complaint-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  padding: 20px;
}

.page-header {
  width: 100%;
  background-color: #0056b3;
  color: white;
  padding: 20px;
  text-align: center;
}

.new-complaint-form, .complaint-history {
  width: 100%;
  max-width: 600px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border-radius: 8px;
  margin-top: 20px;
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
