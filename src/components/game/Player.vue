<script setup lang="ts">
import { computed } from 'vue'
import keepImg from '../../assets/keeper.png'
import { usePlayerStore } from '../../store/player'
import { useMove } from './player'

useMove()

function usePosition() {
  const { player } = usePlayerStore()

  const STEP = 32
  const position = computed(() => ({
    top: player.y * STEP + 'px',
    left: player.x * STEP + 'px'
  }))

  return {
    position
  }
}

const { position } = usePosition()
</script>

<template>
  <div class="absolute" :style="position">
    <img :src="keepImg" />
  </div>
</template>

<style lang="scss" scoped></style>
