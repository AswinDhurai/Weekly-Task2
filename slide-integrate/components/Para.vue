<template>
    <div class="para-box">
      <div class="para">
        <h1>{{ text }}</h1>
        <p>The introductory paragraph serves to capture your reader's attention and 
        provide context for subsequent paragraphs to come. Its purpose is to 
        compel the reader to continue reading. Instead of starting with mundane words, 
        consider beginning with a quote or an intriguing question to pique the 
        reader's curiosity about what lies ahead.</p>
      </div>
    </div>
</template>

<script setup>
const props = defineProps({
  text: String,
});

</script>

<style setup>
  .para-box {
  margin: 30px 100px;
  text-align: justify;
}
</style>
