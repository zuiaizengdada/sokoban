<script setup lang="ts">
const map = [
  [1, 1, 1, 1, 1, 1],
  [1, 2, 2, 1, 1, 1],
  [1, 1, 2, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1]
]
</script>

<template>
  <div class="map">
    <div v-for="(row, i) in map">
      <div v-for="(col, j) in row">{{ map[i][j] }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
