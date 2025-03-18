<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="layout">
    <!-- Persistent Header -->
    <Header />

    <!-- Slide Content -->
    <div class="content">
      <slot />  <!-- This is where slide content will be rendered -->
    </div>

    <!-- Persistent Footer -->
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.content {
  flex-grow: 1;
  width: 100%;
}
</style>
