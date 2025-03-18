<template>
  <div class="custom-slide">
    <h1 class="title">
      <slot name="title">Custom Template Page - {{ $page }} </slot>  
      <!-- Page Number -->
    </h1>
  </div>
</template>

<style scoped>
.custom-slide {
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: top;
  height: 100%;
  text-align: left;
  padding: 10px;
  background: linear-gradient(to right, #fefb4f, #fe2600);
  color: white;
  border-radius: 10px;
}

.title {
  color: black;
}

</style>
