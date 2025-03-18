<template>
  <div class="custom-slide">
    <h1 class="title">
      <slot name="title">This is Another Template</slot>
    </h1>
    <div class="content">
     <!-- <slot /> -->
    </div>
    <footer class="footer">
      <!-- <slot name="footer">Default Footer Text</slot> -->
    </footer>
  </div>
</template>

<style scoped>
.custom-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 50px;
  background: linear-gradient(to right, #2E3192, #1BFFFF);
  color: rgb(0, 0, 0);
  border-radius: 10px;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: black;
}

.content {
  font-size: 1.5rem;
}

.footer {
  position: absolute;
  bottom: 20px;
  font-size: 1rem;
  opacity: 0.8;
}
</style>
