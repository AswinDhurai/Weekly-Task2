<script setup>
defineProps({
  result: Number,  // Receiving result as a prop
});
</script>

<template>
  <div class="result-box">
    <h3>Result: {{ result }}</h3>
  </div>
</template>

<style scoped>
.result-box {
  padding: 15px;
  margin-top: 10px;
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 8px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
