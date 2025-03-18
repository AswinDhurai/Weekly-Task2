<script setup>
import { ref, computed } from "vue";
import ResultDisplay from "./ResultDisplay.vue"; // Import child component

// Reactive variables for user input
const num1 = ref(0);
const num2 = ref(0);
const operation = ref("+");

// Computed property to perform the calculation
const result = computed(() => {
  switch (operation.value) {
    case "+": return num1.value + num2.value;
    case "-": return num1.value - num2.value;
    case "*": return num1.value * num2.value;
    case "/": return num2.value !== 0 ? num1.value / num2.value : "Cannot divide by zero";
    default: return 0;
  }
});
</script>

<template>
  <div class="calculator">
    <h2>Basic Calculator</h2>

    <!-- User Input Section -->
    <div class="input-group">
      <input type="number" v-model="num1" placeholder="Enter first number" />
      <select v-model="operation">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>
      <input type="number" v-model="num2" placeholder="Enter second number" />
    </div>

    <!-- Result Displayed via Child Component -->
    <ResultDisplay :result="result" />
  </div>
</template>

<style scoped>
.calculator {
  text-align: center;
  padding: 20px;
  background: #f0f0f0;
  border-radius: 10px;
  width: 350px;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.input-group {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
}

input, select {
  padding: 8px;
  font-size: 16px;
}
</style>
