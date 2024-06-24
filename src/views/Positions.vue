<template>
    <div>
      <h2>Positions</h2>
      <ul>
        <li v-for="position in positions" :key="position.id">{{ position.title }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  </script>
  