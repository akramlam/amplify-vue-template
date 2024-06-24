<template>
  <div>
    <div class="h1">Dashboard</div>
    <Users />
    <Positions />
    <Requests />
    <Complaints />

    <!-- Icon button for accessing offcanvas -->
    <button class="fixed-btn btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
      <i class="bi bi-list"></i> <!-- Bootstrap icon for menu -->
    </button>

    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Navigation Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <!-- Navigation links in vertical sidenav style -->
        <nav class="nav flex-column">
          <router-link to="/" class="nav-link">Home</router-link> 
          <router-link to="/user" class="nav-link">User</router-link> 
          <router-link to="/positions" class="nav-link">Positions</router-link> 
          <router-link to="/requests" class="nav-link">Requests</router-link>
          <router-link to="/complaints" class="nav-link">Complaints</router-link>
        </nav>
      </div>
    </div>
    
  </div>
  
</template>

<style scoped>
/* Custom styles for the fixed icon button */
.fixed-btn {
  position: fixed;
  /* bottom: 20px;
  right: 20px; */
  z-index: 1050; /* Ensure the button is above other elements */
}

/* Style adjustments for nav links */
.nav-link {
  color: #007bff;
  cursor: pointer;
}
.nav-link:hover {
  text-decoration: underline;
}
</style>
