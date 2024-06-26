<template>
  <div class="user-profile">
    <div class="header">
      <h1>Your Profile</h1>
    </div>

    <!-- Profile Details Section -->
    <div class="profile-details">
      <h2>Personal Information</h2>
      <form @submit.prevent="updateProfile">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" v-model="user.firstName" class="form-control">
          </div>
          <div class="form-group col-md-6">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" v-model="user.lastName" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="user.email" class="form-control">
        </div>
        <div class="form-group">
          <label for="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" v-model="user.phoneNumber" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Update Profile</button>
      </form>
    </div>

    <!-- Professional Details Section -->
    <div class="professional-details text-center card shadow border">
      <h2>Professional Information</h2>
      <div class="info-section">
        <p><strong>Position:</strong> {{ user.position }}</p>
        <p><strong>Department:</strong> {{ user.department }}</p>
        <p><strong>Salary:</strong> ${{ user.salary }}</p>
        <p><strong>Joining Date:</strong> {{ user.joiningDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phoneNumber: '123-456-7890',
        position: 'Software Developer',
        department: 'Development',
        salary: 80000,
        joiningDate: '2019-08-23'
      }
    };
  },
  methods: {
    updateProfile() {
      console.log('Profile updated:', this.user);
      // Implement API call to update user profile
    }
  }
}
</script>

<style scoped>
.user-profile {
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
.header h1 {
  margin-bottom: 20px;
}

.form-row {
  display: flex;
  margin-bottom: 15px;
}

.form-group {
  margin-right: 10px; /* Spacing between form inputs */
}

.form-control {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
}

.info-section p {
  font-size: 16px;
  margin-bottom: 10px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}
</style>
