<template>
  <div>
    <!-- Button component which creates PPT -->
    <button @click="convertToSlidev">Create PPT</button>

    <!-- Looping the Paragraph component 4 times with v-for directive -->
    <Para v-for="(item, index) in paraArray" 
    :text="item" 
    :key="index" /> 

  </div>
</template>

<script setup>
import Para from '@/components/Para.vue';

const paraArray = [
    "Paragraph : 1",
    "Paragraph : 2",
    "Paragraph : 3",
    "Paragraph : 4",   
];

async function convertToSlidev() {
  // Convert paragraphs to Slidev markdown format

  // Get the component name and sent it to slides.md (i.e) <ComponentName/>
  const markdownContent = paraArray.map(h1 => `## ${h1}`).join("\n\n---\n\n");

  // Send the data to Slidev API
  await fetch('http://localhost:3001/save-slide', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ markdown: markdownContent }),
  });
 }
</script>

<style>
  button {
    position: relative;
    right: 100px;
    float: right;
    color: black;
    background-color: white;
    border: 2px solid black;
    border-radius: 10px;
    font-weight: bold;
    padding: 10px 20px;
  }

  button:hover {
    color: white;
    border: 2px solid white;
    background-color: black;
  }
</style>

