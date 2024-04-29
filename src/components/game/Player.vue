<script setup lang="ts">
import keepImg from '../../assets/keeper.png'
import { usePlayerStore } from '../../store/player'
import { useMove } from './player'
import { usePosition } from '../../composables/usePosition'

useMove()
const { player } = usePlayerStore()
const { position } = usePosition(player)
</script>

<template>
  <div class="absolute" :style="position">
    <img :src="keepImg" />
  </div>
</template>

<style lang="scss" scoped></style>
