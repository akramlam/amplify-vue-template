<template>
  <div class="user-profile">
    <header class="page-header">
      <h1>Your Profile</h1>
    </header>

    <!-- Container for both forms -->
    <div class="profile-container">
      <!-- Profile Details Section -->
      <section class="profile-details">
        <h2>Personal Information</h2>
        <form @submit.prevent="updateProfile" class="profile-form">
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
      </section>

      <!-- Professional Details Section -->
      <section class="professional-details card shadow">
        <h2>Professional Information</h2>
        <div class="info-section">
          <p><strong>Position:</strong> {{ user.position }}</p>
          <p><strong>Department:</strong> {{ user.department }}</p>
          <p><strong>Salary:</strong> ${{ user.salary }}</p>
          <p><strong>Joining Date:</strong> {{ user.joiningDate }}</p>
          <p><strong>Annual Leave Days:</strong> {{ user.annualLeaveDays }}</p>
          <p><strong>Annual Leave Days Remaining:</strong> {{ user.annualLeaveDaysremaining }}</p>
        </div>
      </section>
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
        joiningDate: '2019-08-23',
        annualLeaveDays: 20,
        annualLeaveDaysremaining: 5
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

.profile-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px; /* Adjust based on your layout needs */
}

.profile-form, .professional-details {
  flex: 1;
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border-radius: 8px;
  margin-right: 20px; /* Adds spacing between the sections */
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.form-group {
  flex: 1; /* Ensures the input fields fill the form */
  padding: 0 10px;
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.info-section p {
  font-size: 16px;
  margin-bottom: 10px;
}

.btn-primary {
  background-color: #0056b3;
  border: none;
  padding: 10px 20px;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

/* Adjust the last-child to remove extra margin */
.profile-container > :last-child {
  margin-right: 0;
}
</style>
